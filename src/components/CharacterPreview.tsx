import React from 'react';
import { CharacterConfig } from '../App';
import { viewBox } from '../character/types';
import { getBodyComponent, getFaceComponent, poseFromOrientation, powerFromState, availableBodyKeys, availableFaceKeys, availableBodyColors, availableFaceColors } from '../character/manifest';
import { bodyTransformByPosePower, faceRectByPose, computeFitTransformForRect, faceScaleByPose } from '../character/layout';

interface CharacterPreviewProps {
  config: CharacterConfig;
}

export function CharacterPreview({ config }: CharacterPreviewProps) {
  const { 
    expression, 
    orientation, 
    accentColor, 
    lidOpen, 
    scannerActive, 
    accessories,
    glowEnabled
  } = config;

  // Determine closest asset color from accentColor
  const presetHexToName: Record<string, string> = {
    '#3CFFF8': 'aqua',
    '#9657C7': 'purple',
    '#ED6060': 'red',
    '#FFB42E': 'orange',
    '#3EA33E': 'green',
  };
  const hexToRgb = (hex: string) => {
    const h = hex.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return { r, g, b };
  };
  const colorDistance = (h1: string, h2: string) => {
    const a = hexToRgb(h1);
    const b = hexToRgb(h2);
    const dr = a.r - b.r;
    const dg = a.g - b.g;
    const db = a.b - b.b;
    return dr * dr + dg * dg + db * db;
  };
  const chooseAssetColorName = () => {
    // Exact preset match first
    if (presetHexToName[accentColor]) {
      return presetHexToName[accentColor];
    }
    // Nearest preset
    const presetHexes = Object.keys(presetHexToName);
    let bestHex = presetHexes[0];
    let bestDist = Number.POSITIVE_INFINITY;
    for (const h of presetHexes) {
      const d = colorDistance(accentColor, h);
      if (d < bestDist) {
        bestDist = d;
        bestHex = h;
      }
    }
    const candidate = presetHexToName[bestHex];
    // Ensure candidate exists in available assets; prefer a color present for both body and face
    const bodyHas = availableBodyColors.includes(candidate);
    const faceHas = availableFaceColors.includes(candidate);
    if (bodyHas && faceHas) return candidate;
    if (bodyHas) return candidate;
    if (faceHas) return candidate;
    // Fallback to first available body color, else first available face color, else 'aqua'
    return availableBodyColors[0] ?? availableFaceColors[0] ?? 'aqua';
  };
  const assetColorName = chooseAssetColorName();

  // New: compute pose/power and asset components
  const pose = poseFromOrientation(orientation as any);
  const power = powerFromState({ lidOpen, scannerActive, glowEnabled });
  const BodyComp = getBodyComponent(pose, power, assetColorName);
  const FaceComp = getFaceComponent(pose, expression as any, assetColorName);
  if (!BodyComp || !FaceComp) {
    // Lightweight debug to verify what assets are available
    // eslint-disable-next-line no-console
    console.debug('[CharacterPreview] assets', {
      pose,
      power,
      expression,
      assetColorName,
      hasBody: !!BodyComp,
      hasFace: !!FaceComp,
      availableBodyKeys,
      availableFaceKeys
    });
  }

  // Calculate rotation based on orientation
  const getRotationY = () => {
    switch (orientation) {
      case 'far-left': return -60;
      case 'left': return -30;
      case 'center': return 0;
      case 'right': return 30;
      case 'far-right': return 60;
      default: return 0;
    }
  };

  // Calculate glow color - always use accent color with 80% opacity
  const getGlowColor = () => {
    if (!glowEnabled) return null;
    
    // Convert hex to rgba with 80% opacity
    const hexToRgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    
    return hexToRgba(accentColor, 0.8);
  };

  const glowColorValue = getGlowColor();

  // Calculate transforms based on orientation
  const getOrientationTransform = () => {
    if (orientation === 'left') return 'scaleX(-1)';
    if (orientation === 'right') return 'scaleX(1)';
    return 'scaleX(1)';
  };

  const getEyeOffset = () => {
    if (orientation === 'left') return -8;
    if (orientation === 'right') return 8;
    return 0;
  };

  const eyeOffset = getEyeOffset();

  // Expression configurations
  const getExpression = () => {
    switch (expression) {
      case 'happy':
        return {
          leftEye: { cx: 51.149 + eyeOffset, cy: 51.149, r: 8 },
          rightEye: { cx: 82.851 + eyeOffset, cy: 51.149, r: 8 },
          mouth: 'M51.5 71C51.5 71 59.5 78 67 78C74.5 78 82.5 71 82.5 71'
        };
      case 'neutral':
        return {
          leftEye: { cx: 51.149 + eyeOffset, cy: 51.149, r: 8 },
          rightEye: { cx: 82.851 + eyeOffset, cy: 51.149, r: 8 },
          mouth: 'M51.5 74C51.5 74 59.5 77 67 77C74.5 77 82.5 74 82.5 74'
        };
      case 'sad':
        return {
          leftEye: { cx: 51.149 + eyeOffset, cy: 51.149, r: 8 },
          rightEye: { cx: 82.851 + eyeOffset, cy: 51.149, r: 8 },
          mouth: 'M51.5 81C51.5 81 59.5 74 67 74C74.5 74 82.5 81 82.5 81'
        };
      case 'surprised':
        return {
          leftEye: { cx: 51.149 + eyeOffset, cy: 51.149, r: 10 },
          rightEye: { cx: 82.851 + eyeOffset, cy: 51.149, r: 10 },
          mouth: 'M 67 71 m -6, 0 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0'
        };
      case 'wink':
        return {
          leftEye: { cx: 51.149 + eyeOffset, cy: 51.149, r: 8 },
          rightEye: null,
          rightEyeLine: 'M 76 51 L 90 51',
          mouth: 'M51.5 71C51.5 71 59.5 78 67 78C74.5 78 82.5 71 82.5 71'
        };
      case 'loopy':
        return {
          leftEye: null,
          rightEye: null,
          leftSpiral: 'M 47 51 Q 47 45, 51 45 Q 55 45, 55 49 Q 55 53, 51 53 Q 49 53, 48 51',
          rightSpiral: 'M 79 51 Q 79 45, 83 45 Q 87 45, 87 49 Q 87 53, 83 53 Q 81 53, 80 51',
          mouth: 'M51.5 74C51.5 74 59.5 77 67 77C74.5 77 82.5 74 82.5 74'
        };
      case 'thinking':
        return {
          leftEye: { cx: 51.149 + eyeOffset, cy: 51.149, r: 8 },
          rightEye: { cx: 82.851 + eyeOffset, cy: 51.149, r: 8 },
          mouth: 'M51.5 74C51.5 74 59.5 77 67 77C74.5 77 82.5 74 82.5 74',
          dots: [
            { cx: 50, cy: 75 },
            { cx: 58, cy: 75 },
            { cx: 66, cy: 75 }
          ]
        };
      case 'sleeping':
        return {
          leftEye: null,
          rightEye: null,
          leftEyeLine: 'M 45 51 L 57 51',
          rightEyeLine: 'M 76 51 L 88 51',
          mouth: 'M51.5 74C51.5 74 59.5 77 67 77C74.5 77 82.5 74 82.5 74',
          zzz: [
            { x: 90, y: 40, size: 'small' },
            { x: 95, y: 32, size: 'medium' },
            { x: 100, y: 22, size: 'large' }
          ]
        };
    }
  };

  const exp = getExpression();

  // If we have either body or face assets, render them with asset wrappers and transforms.
  if (BodyComp || FaceComp) {
    const faceRect = faceRectByPose[pose];
    const faceScale = faceScaleByPose[pose] ?? 1;
    const faceTf = computeFitTransformForRect(faceRect, faceScale);
    const bodyTf = bodyTransformByPosePower[pose][power];
    // Center-preserving scale for body so increasing scale doesn't drift to top-left
    const centeredBodyTx = bodyTf.tx + (viewBox.width - viewBox.width * bodyTf.scale) / 2;
    const centeredBodyTy = bodyTf.ty + (viewBox.height - viewBox.height * bodyTf.scale) / 2;
    const glowColorValue = glowEnabled ? accentColor : null;
    // Expand the outer canvas (viewBox) to add whitespace padding and avoid glow clipping.
    // Keep aspect ratio identical by padding proportionally on both axes.
    const padFactor = power === 'on' ? 0.1 : 0.1; // 18% of base dims when on; 8% when off
    const outerWidth = viewBox.width * (1 + 2 * padFactor);
    const outerHeight = viewBox.height * (1 + 2 * padFactor);
    const marginX = viewBox.width * padFactor;
    const marginY = viewBox.height * padFactor;
    return (
      <div className="relative w-full h-full">
        <svg
          viewBox={`0 0 ${outerWidth} ${outerHeight}`}
          className="w-full h-full"
          style={{ 
            filter: glowColorValue ? `drop-shadow(0 0 20px ${glowColorValue})` : undefined
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform={`translate(${marginX}, ${marginY})`}>
          {/* Body layer */}
          {BodyComp && (
            <g transform={`translate(${centeredBodyTx}, ${centeredBodyTy}) scale(${bodyTf.scale})`}>
              <BodyComp width={viewBox.width} height={viewBox.height} />
            </g>
          )}
          {/* Face layer (optional small nudge per pose) */}
          {FaceComp && (
            <g transform={`translate(${faceTf.tx}, ${faceTf.ty}) scale(${faceTf.scale})`}>
              <FaceComp width={viewBox.width} height={viewBox.height} />
            </g>
          )}
          </g>
          {/* TODO: accessories can become asset-based later; keep existing simple ones for now */}
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 315 520"
        className="w-full h-full"
        style={{ 
          transform: `rotateY(${getRotationY()}deg) ${getOrientationTransform()}`,
          filter: glowColorValue ? `drop-shadow(0 0 20px ${glowColorValue})` : undefined
        }}
      >
        <defs>
          {/* Define filters for glow */}
          {glowColorValue && (
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          )}
        </defs>
        
        {/* Main Body Container */}
        <g>
          {/* Top Lid - conditionally rendered */}
          {lidOpen && (
            <g>
              <circle
                cx="157.5"
                cy="24"
                r="24"
                fill={accentColor}
                opacity="0.8"
              />
              <rect
                x="145"
                y="42"
                width="25"
                height="18"
                fill="#828282"
                rx="2"
              />
            </g>
          )}

          {/* Top Bar */}
          <rect 
            x="18" 
            y="188" 
            width="279" 
            height="7" 
            fill="#828282"
          />

          {/* Main Body */}
          <rect 
            x="18" 
            y="81" 
            width="279" 
            height="376" 
            fill="white" 
            rx="20"
          />

          {/* Side Ears/Panels */}
          <circle 
            cx="10" 
            cy="266" 
            r="20" 
            fill={accentColor}
          />
          <circle 
            cx="305" 
            cy="266" 
            r="20" 
            fill={accentColor}
          />

          {/* Dark Face Container */}
          <rect 
            x="43" 
            y="208" 
            width="229" 
            height="110" 
            fill="#143441" 
            rx="55"
          />

          {/* Face - Eyes and Mouth */}
          <g transform="translate(89.5, 252)">
            {/* Left Eye */}
            {exp.leftEye && (
              <circle
                cx={exp.leftEye.cx}
                cy={exp.leftEye.cy}
                r={exp.leftEye.r}
                fill={accentColor}
                filter={`drop-shadow(0 0 8px ${accentColor})`}
              />
            )}
            
            {/* Left Eye Line (for sleeping/wink) */}
            {exp.leftEyeLine && (
              <path
                d={exp.leftEyeLine}
                stroke={accentColor}
                strokeWidth="3"
                strokeLinecap="round"
              />
            )}

            {/* Left Spiral (for loopy) */}
            {exp.leftSpiral && (
              <path
                d={exp.leftSpiral}
                stroke={accentColor}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            )}

            {/* Right Eye */}
            {exp.rightEye && (
              <circle
                cx={exp.rightEye.cx}
                cy={exp.rightEye.cy}
                r={exp.rightEye.r}
                fill={accentColor}
                filter={`drop-shadow(0 0 8px ${accentColor})`}
              />
            )}
            
            {/* Right Eye Line (for wink/sleeping) */}
            {exp.rightEyeLine && (
              <path
                d={exp.rightEyeLine}
                stroke={accentColor}
                strokeWidth="3"
                strokeLinecap="round"
              />
            )}

            {/* Right Spiral (for loopy) */}
            {exp.rightSpiral && (
              <path
                d={exp.rightSpiral}
                stroke={accentColor}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            )}

            {/* Mouth */}
            {exp.mouth && (
              <path
                d={exp.mouth}
                stroke={accentColor}
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
                filter={`drop-shadow(0 0 6px ${accentColor})`}
              />
            )}

            {/* Thinking Dots */}
            {exp.dots && exp.dots.map((dot, idx) => (
              <circle
                key={idx}
                cx={dot.cx}
                cy={dot.cy}
                r="2.5"
                fill={accentColor}
              />
            ))}

            {/* ZZZ for sleeping */}
            {exp.zzz && exp.zzz.map((z, idx) => (
              <text
                key={idx}
                x={z.x}
                y={z.y}
                fill={accentColor}
                fontSize={z.size === 'small' ? '12' : z.size === 'medium' ? '16' : '20'}
                fontFamily="Arial, sans-serif"
                style={{ fontWeight: 'bold' }}
              >
                Z
              </text>
            ))}
          </g>

          {/* A.I. Label */}
          <text
            x="220"
            y="380"
            fill="#828282"
            fontSize="32"
            fontFamily="Arial, sans-serif"
          >
            A.I.
          </text>

          {/* Bottom Scanner Section */}
          <rect 
            x="66" 
            y="457" 
            width="183" 
            height="8" 
            fill="#828282"
          />
          <rect 
            x="66" 
            y="459" 
            width="183" 
            height="28" 
            fill="#F2F2F2" 
            rx="4"
          />
          
          {/* Scanner Active Indicator */}
          {scannerActive && (
            <g>
              <ellipse
                cx="157.5"
                cy="495"
                rx="80"
                ry="25"
                fill={accentColor}
                opacity="0.9"
              />
              <ellipse
                cx="157.5"
                cy="495"
                rx="60"
                ry="18"
                fill={accentColor}
                filter={`drop-shadow(0 0 10px ${accentColor})`}
              />
            </g>
          )}

          {/* Bottom Display Panel */}
          <rect 
            x="74" 
            y="343" 
            width="173" 
            height="173" 
            fill="white" 
            rx="10"
          />
          <rect 
            x="74" 
            y="343" 
            width="173" 
            height="173" 
            fill={accentColor} 
            opacity="0.05" 
            rx="10"
          />
        </g>

        {/* Accessories Layer */}
        {accessories.apparel.includes('sunglasses') && (
          <g transform="translate(89.5, 245)">
            <rect x="35" y="45" width="30" height="18" fill="#1a1a1a" rx="9" />
            <rect x="69" y="45" width="30" height="18" fill="#1a1a1a" rx="9" />
            <line x1="65" y1="54" x2="69" y2="54" stroke="#1a1a1a" strokeWidth="3" />
          </g>
        )}

        {accessories.apparel.includes('headphones') && (
          <g>
            <path
              d="M 100 220 Q 157.5 180, 215 220"
              stroke="#1a1a1a"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <rect x="90" y="220" width="20" height="30" fill="#1a1a1a" rx="10" />
            <rect x="205" y="220" width="20" height="30" fill="#1a1a1a" rx="10" />
            <circle cx="100" cy="235" r="6" fill={accentColor} />
            <circle cx="215" cy="235" r="6" fill={accentColor} />
          </g>
        )}

        {accessories.apparel.includes('hat') && (
          <g>
            <ellipse cx="157.5" cy={lidOpen ? "65" : "85"} rx="50" ry="8" fill="#1a1a1a" />
            <rect x="132.5" y={lidOpen ? "25" : "45"} width="50" height="40" fill="#1a1a1a" rx="25" />
          </g>
        )}

        {/* Emotes Layer */}
        {accessories.emotes.includes('zzz') && (
          <g>
            {[
              { x: 200, y: 100, size: '14' },
              { x: 215, y: 85, size: '18' },
              { x: 230, y: 65, size: '22' }
            ].map((z, idx) => (
              <text
                key={idx}
                x={z.x}
                y={z.y}
                fill={accentColor}
                fontSize={z.size}
                fontFamily="Arial, sans-serif"
                style={{ fontWeight: 'bold' }}
              >
                Z
              </text>
            ))}
          </g>
        )}

        {accessories.emotes.includes('sparkles') && (
          <g>
            {[
              { x: 40, y: 120, rotation: 0 },
              { x: 270, y: 150, rotation: 45 },
              { x: 60, y: 350, rotation: 90 }
            ].map((sparkle, idx) => (
              <g key={idx} transform={`translate(${sparkle.x}, ${sparkle.y}) rotate(${sparkle.rotation})`}>
                <path
                  d="M 0,-8 L 1,-2 L 7,-1 L 1,0 L 0,6 L -1,0 L -7,-1 L -1,-2 Z"
                  fill={accentColor}
                  filter={`drop-shadow(0 0 4px ${accentColor})`}
                />
              </g>
            ))}
          </g>
        )}

        {accessories.emotes.includes('question') && (
          <g transform="translate(230, 90)">
            <text
              x="0"
              y="0"
              fill={accentColor}
              fontSize="36"
              fontFamily="Arial, sans-serif"
              style={{ fontWeight: 'bold' }}
              filter={`drop-shadow(0 0 4px ${accentColor})`}
            >
              ?
            </text>
          </g>
        )}

        {/* Misc Layer */}
        {accessories.misc.includes('cone') && (
          <g>
            <defs>
              <linearGradient id="coneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.7" />
                <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 157.5 487 L 100 530 L 215 530 Z"
              fill="url(#coneGradient)"
              opacity="0.6"
            />
          </g>
        )}

        {accessories.misc.includes('shadow') && (
          <ellipse
            cx="157.5"
            cy="510"
            rx="60"
            ry="10"
            fill="#000000"
            opacity="0.2"
          />
        )}
      </svg>
    </div>
  );
}