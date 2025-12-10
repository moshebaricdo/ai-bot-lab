export type Pose = 'front' | 'quarter-left' | 'left' | 'quarter-right' | 'right';
export type Power = 'on' | 'off';

// Extend as you add more expressions
export type Expression =
  | 'happy'
  | 'neutral'
  | 'sad'
  | 'wink'
  | 'surprised'
  | 'loopy'
  | 'sleeping'
  | 'typing';

// Props passed to individual asset components
export type AssetProps = {
  // Accent/glow color if an asset wants to tint highlights.
  // Optional so pure assets can ignore it.
  accentColor?: string;
};

export const viewBox = { width: 315, height: 520 } as const;

// Optional, small nudge per pose for face placement inside a 315x520 canvas
export const faceOffsetByPose: Record<Pose, { x: number; y: number }> = {
  'front': { x: 0, y: 0 },
  'quarter-left': { x: -4, y: 0 },
  'left': { x: -6, y: 0 },
  'quarter-right': { x: 4, y: 0 },
  'right': { x: 6, y: 0 },
};

