import type { FC, SVGProps } from 'react';
import React from 'react';
import { Expression, Pose, Power } from './types';

// Eagerly import all SVGs as React components using SVGR with the `?react` query.
// This guarantees a default React component export for each SVG.
const bodyModules = import.meta.glob('./assets/body/**/**/*.svg', {
  eager: true,
  import: 'default',
  query: '?react',
}) as Record<string, FC<SVGProps<SVGSVGElement>>>;

const faceModules = import.meta.glob('./assets/face/**/**/*.svg', {
  eager: true,
  import: 'default',
  query: '?react',
}) as Record<string, FC<SVGProps<SVGSVGElement>>>;

type SvgComp = FC<SVGProps<SVGSVGElement>>;

// Build lookup maps at module load
const bodyMap = new Map<string, SvgComp>(); // key: `${pose}:${power}:${color}`
const faceMap = new Map<string, SvgComp>(); // key: `${pose}:${expression}:${color}`
const bodyColors = new Set<string>();
const faceColors = new Set<string>();

// Helper to coerce folder names into Pose
const poseFolderToPose = (folder: string): Pose | null => {
  switch (folder) {
    case 'front':
    case 'left':
    case 'right':
    case 'quarter-left':
    case 'quarter-right':
      return folder;
    default:
      return null;
  }
};

function parseBodyPath(path: string): { pose: Pose; power: Power; color: string } | null {
  // Supports BOTH:
  // - New: ./assets/body/on/aqua/body_on_front.svg
  //        ./assets/body/off/body_off_front.svg         (no color for off)
  // - Old: ./assets/body/front/on/aqua/body_on_front.svg
  const parts = path.split('/');
  const idx = parts.findIndex((p) => p === 'body');
  if (idx < 0) return null;
  const after = parts.slice(idx + 1);

  const isPoseName = (s?: string) => !!s && !!poseFolderToPose(s);
  const isPower = (s?: string): s is Power => s === 'on' || s === 'off';
  const fileWithQuery = parts[parts.length - 1] ?? '';
  const file = fileWithQuery.split('?')[0];
  // Extract pose from filename, accepting hyphen or underscore: body_on_quarter-left.svg or body_on_quarter_left.svg
  const poseFromFile = () => {
    const m = file.match(/body_(?:on|off)_([a-z_-]+)\.svg/i);
    if (!m) return null;
    const raw = m[1].toLowerCase().replace('_', '-');
    return poseFolderToPose(raw);
  };

  // New structure first: on/off -> color? -> pose
  if (isPower(after[0])) {
    const power = after[0] as Power;
    if (power === 'on') {
      const color = after[1] && !isPoseName(after[1]) ? after[1] : 'none';
      const pose = poseFromFile();
      if (pose) return { pose, power, color };
    } else {
      // off: no color; pose from filename
      const pose = poseFromFile();
      if (pose) return { pose, power, color: 'none' };
    }
  }

  // Old structure: pose -> on/off -> color?
  if (isPoseName(after[0]) && isPower(after[1])) {
    const pose = poseFolderToPose(after[0])!;
    const power = after[1] as Power;
    let color = 'none';
    if (power === 'on') {
      const maybeColor = after[2];
      if (maybeColor && !isPoseName(maybeColor)) {
        color = maybeColor;
      }
    }
    return { pose, power, color };
  }

  return null;
}

// Populate bodyMap (pose + power + color)
for (const [path, Comp] of Object.entries(bodyModules)) {
  const parsed = parseBodyPath(path);
  if (!parsed) continue;
  const { pose, power, color } = parsed;
  const key = `${pose}:${power}:${color}`;
  if (power === 'on' && color !== 'none') {
    bodyColors.add(color);
  }
  // Prefer first match; allow overwrite only if filename includes `body_`
  if (!bodyMap.has(key) || /body[_-]/i.test(path)) {
    bodyMap.set(key, Comp);
  }
}

function parseFacePath(path: string): { pose: Pose; color: string } | null {
  // Supports BOTH:
  // - New: ./assets/face/aqua/front/front_face_happy.svg
  // - Old: ./assets/face/front/front_face_happy.svg
  const parts = path.split('/');
  const idx = parts.findIndex((p) => p === 'face');
  if (idx < 0) return null;
  const after = parts.slice(idx + 1);
  const isPoseName = (s?: string) => !!s && !!poseFolderToPose(s);
  // New structure: color -> pose
  if (!isPoseName(after[0]) && isPoseName(after[1])) {
    const color = after[0] ?? 'none';
    const pose = poseFolderToPose(after[1])!;
    return { pose, color };
  }
  // Old structure: pose only
  if (isPoseName(after[0])) {
    const pose = poseFolderToPose(after[0])!;
    return { pose, color: 'none' };
  }
  return null;
}

// Populate faceMap (pose + expression + color)
for (const [path, Comp] of Object.entries(faceModules)) {
  const parsed = parseFacePath(path);
  if (!parsed) continue;
  const { pose, color } = parsed;
  if (color !== 'none') faceColors.add(color);
  const file = path.split('/').pop() ?? '';
  // Extract expression at end of filename: *_face_<expr>.svg
  const match = file.match(/face[_-]([a-z0-9-]+)\.svg/i);
  const expr = match?.[1] as Expression | undefined;
  if (!expr) continue;
  const key = `${pose}:${expr}:${color}`;
  if (!faceMap.has(key)) {
    faceMap.set(key, Comp);
  }
}

export function getBodyComponent(pose: Pose, power: Power, color?: string): SvgComp | null {
  // Power off: ignore color and look for 'none' fallbacks and legacy keys
  if (power === 'off') {
    const exact = bodyMap.get(`${pose}:${power}:none`) ?? bodyMap.get(`${pose}:${power}`);
    if (exact) return exact;
    // Fallback to any available pose for off
    const poseOrder: Pose[] = ['front', 'quarter-left', 'quarter-right', 'left', 'right'];
    for (const altPose of poseOrder) {
      const comp = bodyMap.get(`${altPose}:${power}:none`) ?? bodyMap.get(`${altPose}:${power}`);
      if (comp) return comp;
    }
    return null;
  }
  // Power on: prefer requested color, then any available color for that pose/power, then legacy
  if (color) {
    const exact = bodyMap.get(`${pose}:${power}:${color}`);
    if (exact) return exact;
  }
  // Try any color for same pose
  const anyColorKey = Array.from(bodyMap.keys()).find((k) => k.startsWith(`${pose}:${power}:`));
  if (anyColorKey) return bodyMap.get(anyColorKey)!;
  // Fallback across poses with same power and color
  const poseOrder: Pose[] = ['front', 'quarter-left', 'quarter-right', 'left', 'right'];
  for (const altPose of poseOrder) {
    if (color) {
      const altExact = bodyMap.get(`${altPose}:${power}:${color}`);
      if (altExact) return altExact;
    }
    const altAnyColorKey = Array.from(bodyMap.keys()).find((k) => k.startsWith(`${altPose}:${power}:`));
    if (altAnyColorKey) return bodyMap.get(altAnyColorKey)!;
    const legacy = bodyMap.get(`${altPose}:${power}`);
    if (legacy) return legacy;
  }
  return bodyMap.get(`${pose}:${power}`) ?? null;
}

export function getFaceComponent(pose: Pose, expression: Expression, color?: string): SvgComp | null {
  if (color) {
    const exact = faceMap.get(`${pose}:${expression}:${color}`);
    if (exact) return exact;
  }
  // Try any color for the pose/expression, then legacy (no color)
  const anyColorKey = Array.from(faceMap.keys()).find((k) =>
    k.startsWith(`${pose}:${expression}:`)
  );
  if (anyColorKey) return faceMap.get(anyColorKey)!;
  return faceMap.get(`${pose}:${expression}:none`) ?? faceMap.get(`${pose}:${expression}`) ?? null;
}

// Debug helpers (safe to keep; tree-shaken in prod builds)
export const availableBodyKeys = Array.from(bodyMap.keys());
export const availableFaceKeys = Array.from(faceMap.keys());
export const availableBodyColors = Array.from(bodyColors.values());
export const availableFaceColors = Array.from(faceColors.values());

// Map existing app orientations to our poses
export type AppOrientation = 'far-left' | 'left' | 'center' | 'right' | 'far-right';
export function poseFromOrientation(orientation: AppOrientation): Pose {
  switch (orientation) {
    case 'far-left':
      return 'left';
    case 'left':
      return 'quarter-left';
    case 'center':
      return 'front';
    case 'right':
      return 'quarter-right';
    case 'far-right':
      return 'right';
    default:
      return 'front';
  }
}

export function powerFromState(opts: { lidOpen: boolean; scannerActive: boolean; glowEnabled: boolean }): Power {
  const { lidOpen, scannerActive, glowEnabled } = opts;
  return lidOpen || scannerActive || glowEnabled ? 'on' : 'off';
}

