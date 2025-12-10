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
const bodyMap = new Map<string, SvgComp>(); // key: `${pose}:${power}`
const faceMap = new Map<string, SvgComp>(); // key: `${pose}:${expression}`

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

// Populate bodyMap
for (const [path, Comp] of Object.entries(bodyModules)) {
  // Example path: ./assets/body/front/on/body_on_front.svg?react
  const parts = path.split('/');
  const idx = parts.findIndex((p) => p === 'body');
  const poseFolder = parts[idx + 1];
  const powerFolder = parts[idx + 2];
  const pose = poseFolderToPose(poseFolder);
  const power = powerFolder === 'on' || powerFolder === 'off' ? (powerFolder as Power) : null;
  if (pose && power) {
    const key = `${pose}:${power}`;
    // Prefer first match; allow overwrite only if filename includes `body_`
    if (!bodyMap.has(key) || /body[_-]/i.test(path)) {
      bodyMap.set(key, Comp);
    }
  }
}

// Populate faceMap
for (const [path, Comp] of Object.entries(faceModules)) {
  // Example: ./assets/face/front/front_face_happy.svg?react
  const parts = path.split('/');
  const idx = parts.findIndex((p) => p === 'face');
  const poseFolder = parts[idx + 1];
  const pose = poseFolderToPose(poseFolder);
  if (!pose) continue;
  const file = parts[parts.length - 1];
  // Try to extract expression at end of filename: *_face_<expr>.svg
  const match = file.match(/face[_-]([a-z0-9-]+)\.svg/i);
  const expr = match?.[1] as Expression | undefined;
  if (expr) {
    const key = `${pose}:${expr}`;
    if (!faceMap.has(key)) {
      faceMap.set(key, Comp);
    }
  }
}

export function getBodyComponent(pose: Pose, power: Power): SvgComp | null {
  return bodyMap.get(`${pose}:${power}`) ?? null;
}

export function getFaceComponent(pose: Pose, expression: Expression): SvgComp | null {
  return faceMap.get(`${pose}:${expression}`) ?? null;
}

// Debug helpers (safe to keep; tree-shaken in prod builds)
export const availableBodyKeys = Array.from(bodyMap.keys());
export const availableFaceKeys = Array.from(faceMap.keys());

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

