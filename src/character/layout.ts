import { Pose, Power, viewBox } from './types';

export type Transform = { scale: number; tx: number; ty: number };

// Initial transform tweaks for body per pose/power.
export const bodyTransformByPosePower: Record<Pose, Record<Power, Transform>> = {
  'front': {
    off: { scale: 1, tx: 0, ty: 0 },
    on: { scale: 1.265, tx: 0, ty: 0 },
  },
  'quarter-left': {
    off: { scale: 1, tx: 0, ty: 0 },
    on: { scale: 1.24, tx: 0, ty: 0 },
  },
  'left': {
    off: { scale: 1, tx: 0, ty: 0 },
    on: { scale: 1.15, tx: 0, ty: 0 },
  },
  'quarter-right': {
    off: { scale: 1, tx: 0, ty: 0 },
    on: { scale: 1.24, tx: 0, ty: 0 },
  },
  'right': {
    off: { scale: 1, tx: 0, ty: 0 },
    on: { scale: 1.15, tx: 0, ty: 0 },
  },
};

// Target rectangle where the face should sit, per pose (in canvas coordinates).
export const faceRectByPose: Record<Pose, { x: number; y: number; width: number; height: number }> = {
  'front': { x: 43, y: 210, width: 229, height: 109 },
  'quarter-left': { x: 35, y: 210, width: 206, height: 109 },
  'left': { x: 20.5, y: 210, width: 95, height: 109 },
  'quarter-right': { x: 70, y: 210, width: 206, height: 109 },
  'right': { x: 200, y: 210, width: 95, height: 109 },
};

// Compute a uniform scale + translation to render a full-canvas-viewBox asset
export function computeFitTransformForRect(
  rect: { x: number; y: number; width: number; height: number },
  extraScale = 1
) {
  const sx = rect.width / viewBox.width;
  const sy = rect.height / viewBox.height;
  const s = Math.min(sx, sy) * extraScale;
  const drawnWidth = viewBox.width * s;
  const drawnHeight = viewBox.height * s;
  const tx = rect.x + (rect.width - drawnWidth) / 2;
  const ty = rect.y + (rect.height - drawnHeight) / 2;
  return { scale: s, tx, ty };
}

// Coarse default enlargement for faces (assets are smaller within their viewBox).
export const faceScaleByPose: Record<Pose, number> = {
  'front': 3.5,
  'quarter-left': 3.15,
  'left': 1.45,
  'quarter-right': 3.15,
  'right': 1.45,
};

