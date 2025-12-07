import { RefObject, useState } from 'react';
import { CharacterConfig } from '../App';
import { PanelHeader } from './PanelHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface ExportPanelProps {
  config: CharacterConfig;
  previewRef: RefObject<HTMLDivElement>;
  exportWidth: number;
  setExportWidth: (width: number) => void;
}

export function ExportPanel({ config, previewRef, exportWidth, setExportWidth }: ExportPanelProps) {
  const [widthInput, setWidthInput] = useState<string>(exportWidth.toString());

  const exportAsSVG = () => {
    const svgElement = previewRef.current?.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `ai-bot-${config.expression}-${Date.now()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportAsPNG = () => {
    const svgElement = previewRef.current?.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    const height = Math.round(exportWidth * 1.625);
    canvas.width = exportWidth * 2; // 2x for better quality
    canvas.height = height * 2;

    img.onload = () => {
      ctx?.drawImage(img, 0, 0, exportWidth * 2, height * 2);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ai-bot-${config.expression}-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  const handleWidthChange = (value: string) => {
    setWidthInput(value);
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue > 0) {
      setExportWidth(numValue);
    }
  };

  return (
    <div className="w-[350px] bg-white border-l border-[var(--color-muted)] flex flex-col shrink-0">
      <PanelHeader title="Export Options" />
      
      <div className="flex-1 flex flex-col p-2.5 bg-[#f0f2f5] gap-2">
        {/* SVG Export Card */}
        <div className="bg-white relative rounded-[var(--radius)]">
          <div aria-hidden="true" className="absolute border border-[var(--color-muted)] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-2 items-start pb-4 pt-3 px-4 relative size-full">
              {/* Title and Description */}
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
                    <div className="flex flex-col justify-center relative shrink-0 text-[var(--color-foreground)] text-sm text-center text-nowrap" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>
                      <p className="leading-[21.56px] whitespace-pre">Export as SVG</p>
                    </div>
                    <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#424d59] text-xs w-[min-content]" style={{ fontFamily: 'var(--font-body)' }}>
                      <p className="leading-[19.68px]">Useful if you need a vectorized graphic or plan to make further edits.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={exportAsSVG}
                className="bg-[var(--color-primary)] min-w-[32px] relative rounded-[var(--radius)] shrink-0 w-full hover:opacity-90 transition-opacity"
              >
                <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
                  <div className="content-stretch flex gap-2 items-center justify-center min-w-[inherit] not-italic px-3 py-[5px] relative text-sm text-center text-white w-full">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-[18px]">
                      <FontAwesomeIcon icon={faDownload} />
                    </div>
                    <p className="leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>Download</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* PNG Export Card */}
        <div className="bg-white relative rounded-[var(--radius)]">
          <div aria-hidden="true" className="absolute border border-[var(--color-muted)] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-2 items-start pb-4 pt-3 px-4 relative size-full">
              {/* Title and Description */}
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
                    <div className="flex flex-col justify-center relative shrink-0 text-[var(--color-foreground)] text-sm text-center text-nowrap" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>
                      <p className="leading-[21.56px] whitespace-pre">Export as PNG</p>
                    </div>
                    <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#424d59] text-xs w-[min-content]" style={{ fontFamily: 'var(--font-body)' }}>
                      <p className="leading-[19.68px]">If you need a rasterized/standard image.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Width Input Field */}
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                {/* Label */}
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[var(--color-foreground)] text-xs" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>
                    <p className="leading-[19.68px]">Width (px)</p>
                  </div>
                </div>
                
                {/* Input */}
                <div className="bg-white relative rounded-[var(--radius)] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                  <div className="size-full">
                    <div className="content-stretch flex items-start px-[10px] py-[5px] relative w-full">
                      <input
                        type="number"
                        value={widthInput}
                        onChange={(e) => handleWidthChange(e.target.value)}
                        placeholder="ie. 400px"
                        className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[var(--color-foreground)] text-sm border-none outline-none bg-transparent w-full"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Helper Text */}
                <div className="content-stretch flex gap-1 items-center relative shrink-0 w-full">
                  <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#424d59] text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                    <p className="leading-[19.68px]">Height is proportionate to width.</p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={exportAsPNG}
                className="bg-[var(--color-primary)] min-w-[32px] relative rounded-[var(--radius)] shrink-0 w-full hover:opacity-90 transition-opacity"
              >
                <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
                  <div className="content-stretch flex gap-2 items-center justify-center min-w-[inherit] not-italic px-3 py-[5px] relative text-sm text-center text-white w-full">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-[18px]">
                      <FontAwesomeIcon icon={faDownload} />
                    </div>
                    <p className="leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>Download</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
