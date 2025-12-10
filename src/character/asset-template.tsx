import type { FC, SVGProps } from 'react';
import { viewBox } from './types';

// Template for dropping in a single asset as a React component.
// Replace the <g> contents with your SVG paths/groups.
// Keep geometry within the 315x520 viewBox for perfect alignment with the preview/export.
export const AssetTemplate: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g>
        {/* Replace this with your actual SVG content */}
        <rect x="0" y="0" width={viewBox.width} height={viewBox.height} fill="none" />
      </g>
    </svg>
  );
};

// Suggested naming when you add real assets:
// - Bodies:
//   src/character/assets/body/on/body-front.tsx
//   src/character/assets/body/off/body-front.tsx
//   src/character/assets/body/on/body-quarter-left.tsx
//   ...
//
// - Faces per pose and expression:
//   src/character/assets/face/front/face-happy.tsx
//   src/character/assets/face/front/face-neutral.tsx
//   src/character/assets/face/left/face-happy.tsx
//   ...
//
// Keep fills/strokes neutral; preview layer can tint/glow externally.

