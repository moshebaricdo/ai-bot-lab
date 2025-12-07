import { useState, useRef } from 'react';
import { CharacterPreview } from './components/CharacterPreview';
import { Sidebar } from './components/Sidebar';
import { ExportPanel } from './components/ExportPanel';
import { PanelHeader, PanelHeaderIconButton } from './components/PanelHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export interface CharacterConfig {
  expression: 'happy' | 'neutral' | 'sad' | 'surprised' | 'wink' | 'loopy' | 'thinking' | 'sleeping';
  orientation: 'far-left' | 'left' | 'center' | 'right' | 'far-right';
  accentColor: string;
  lidOpen: boolean;
  scannerActive: boolean;
  accessories: {
    apparel: ('sunglasses' | 'headphones' | 'hat')[];
    emotes: ('zzz' | 'sparkles' | 'question')[];
    misc: ('cone' | 'shadow')[];
  };
  glowEnabled: boolean;
}

export default function App() {
  const [config, setConfig] = useState<CharacterConfig>({
    expression: 'happy',
    orientation: 'center',
    accentColor: '#3CFFF8',
    lidOpen: false,
    scannerActive: false,
    accessories: {
      apparel: [],
      emotes: [],
      misc: []
    },
    glowEnabled: false
  });

  const [previewMode, setPreviewMode] = useState<'light' | 'dark'>('light');
  const [exportWidth, setExportWidth] = useState<number>(320);

  const previewRef = useRef<HTMLDivElement>(null);

  const resetToDefaults = () => {
    setConfig({
      expression: 'happy',
      orientation: 'center',
      accentColor: '#3CFFF8',
      lidOpen: false,
      scannerActive: false,
      accessories: {
        apparel: [],
        emotes: [],
        misc: []
      },
      glowEnabled: false
    });
  };

  return (
    <div className="flex flex-col h-screen bg-[#f0f2f5]">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          config={config} 
          setConfig={setConfig}
          onReset={resetToDefaults}
        />
        
        {/* Preview Area */}
        <div className="flex-1 flex flex-col">
          <PanelHeader
            title="Preview"
            actions={
              <>
                <PanelHeaderIconButton
                  onClick={() => setPreviewMode('light')}
                  icon={<FontAwesomeIcon icon={faSun} size="sm" />}
                  title="Light mode"
                  isActive={previewMode === 'light'}
                />
                <PanelHeaderIconButton
                  onClick={() => setPreviewMode('dark')}
                  icon={<FontAwesomeIcon icon={faMoon} size="sm" />}
                  title="Dark mode"
                  isActive={previewMode === 'dark'}
                />
              </>
            }
          />
          
          <div 
            className="flex-1 flex items-center justify-center p-12 transition-colors"
            style={{ backgroundColor: previewMode === 'light' ? '#DFE3E9' : '#292F36' }}
          >
            <div ref={previewRef} style={{ width: `${exportWidth}px`, height: `${exportWidth * 1.625}px` }}>
              <CharacterPreview config={config} />
            </div>
          </div>
        </div>

        <ExportPanel config={config} previewRef={previewRef} exportWidth={exportWidth} setExportWidth={setExportWidth} />
      </div>
    </div>
  );
}