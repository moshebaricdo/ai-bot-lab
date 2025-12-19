import React, { useState } from 'react';
import { CharacterConfig } from '../App';
import { PanelHeader, PanelHeaderIconButton } from './PanelHeader';
import { PanelCard } from './PanelCard';
import { Toggle } from './Toggle';
import { Chip } from './Chip';
import { OrientationSlider } from './OrientationSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRotateLeft, 
  faFaceSmile, 
  faFaceFrown,
  faFaceMeh,
  faFaceGrinWink,
  faFaceSurprise,
  faFaceDizzy,
  faCommentDots,
  faGlasses,
  faHeadphones,
  faBed,
  faStar,
  faQuestion,
  faHatWizard
} from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  config: CharacterConfig;
  setConfig: (config: CharacterConfig) => void;
  onReset: () => void;
}

type TabType = 'body' | 'accessories';

export function Sidebar({ config, setConfig, onReset }: SidebarProps) {
  const [activeTab, setActiveTab] = useState<TabType>('body');
  const [showAccessoriesTooltip, setShowAccessoriesTooltip] = useState(false);

  const updateConfig = (partial: Partial<CharacterConfig>) => {
    setConfig({ ...config, ...partial });
  };

  const toggleApparelAccessory = (accessory: 'sunglasses' | 'headphones' | 'hat') => {
    const newApparel = config.accessories.apparel.includes(accessory)
      ? config.accessories.apparel.filter(a => a !== accessory)
      : [...config.accessories.apparel, accessory];
    updateConfig({ accessories: { ...config.accessories, apparel: newApparel } });
  };

  const toggleEmoteAccessory = (accessory: 'zzz' | 'sparkles' | 'question') => {
    const newEmotes = config.accessories.emotes.includes(accessory)
      ? config.accessories.emotes.filter(a => a !== accessory)
      : [...config.accessories.emotes, accessory];
    updateConfig({ accessories: { ...config.accessories, emotes: newEmotes } });
  };

  const toggleMiscAccessory = (accessory: 'cone' | 'shadow') => {
    const newMisc = config.accessories.misc.includes(accessory)
      ? config.accessories.misc.filter(a => a !== accessory)
      : [...config.accessories.misc, accessory];
    updateConfig({ accessories: { ...config.accessories, misc: newMisc } });
  };

  // Limit UI to three bot colors as requested
  const limitedColors = ['#3CFFF8', '#ED6060', '#3EA33E']; // aqua, red, green

  return (
    <div className="w-[350px] bg-white border-r border-[var(--color-muted)] flex flex-col shrink-0">
      {/* Customize Header */}
      <PanelHeader
        title="Customize"
        actions={
          <PanelHeaderIconButton
            onClick={onReset}
            icon={<FontAwesomeIcon icon={faRotateLeft} size="sm" />}
            title="Reset to defaults"
          />
        }
      />

      {/* Tabs */}
      <div className="h-[40px] border-b border-[var(--color-muted)]">
        <div className="flex justify-center gap-4 px-4 mt-[2px]">
          <button
            onClick={() => setActiveTab('body')}
            className={`flex gap-1.5 pb-2.5 pt-2 relative group ${
              activeTab === 'body' ? 'text-[var(--color-foreground)]' : 'text-[#576575] hover:text-[#0093a4]'
            }`}
          >
            {activeTab === 'body' ? (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)]" />
            ) : (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0093a4] opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            <span className="text-sm"><FontAwesomeIcon icon={faFaceSmile} size="sm" /></span>
            <span className="text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>Body</span>
          </button>
          
          <div
            className="relative"
            onMouseEnter={() => setShowAccessoriesTooltip(true)}
            onMouseLeave={() => setShowAccessoriesTooltip(false)}
          >
            <button
              disabled
              className="flex items-center gap-1.5 pb-2.5 pt-2 relative cursor-not-allowed opacity-30"
              style={{ color: 'rgba(41,47,54,0.3)' }}
              aria-disabled="true"
            >
              <span className="text-sm"><FontAwesomeIcon icon={faGlasses} size="sm" /></span>
              <span className="text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>Accessories</span>
            </button>
            {showAccessoriesTooltip && (
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '100%',
                  marginTop: -1,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 1000,
                  pointerEvents: 'none'
                }}
              >
                <div
                  style={{
                    backgroundColor: '#292F36',
                    color: '#FFFFFF',
                    padding: '4px 8px',
                    borderRadius: '0px 0px 4px 4px',
                    fontSize: 12,
                    fontFamily: 'var(--font-body)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Coming soon
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-2.5 bg-[#f0f2f5]">
        {activeTab === 'body' && (
          <div className="flex flex-col gap-2">
            {/* Color Selection (moved from Color tab) */}
            <PanelCard
              title="Color"
              description="Choose a color for expression and body. Aqua is default, red/green should correspond to sentiment."
              children={(
                <>
                  <div className="content-stretch flex gap-2 items-start relative shrink-0 w-full mb-3">
                    {limitedColors.map(color => (
                      <button
                        key={color}
                        onClick={() => updateConfig({ accentColor: color })}
                        className={`flex items-center justify-center relative rounded-[var(--radius)] shrink-0 size-8 hover:opacity-80 transition-all ${
                          config.accentColor === color ? 'outline outline-2 outline-[var(--color-accent)] outline-offset-2' : ''
                        }`}
                        style={{ backgroundColor: color }}
                      >
                        <div aria-hidden="true" className="absolute border border-[rgba(41,47,54,0.2)] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                      </button>
                    ))}
                  </div>
                  <div
                    className="w-full"
                    style={{
                      height: 1,
                      backgroundColor: '#e6eaef',
                      marginTop: 18,
                      marginBottom: 12,
                    }}
                  />
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[var(--color-foreground)]" style={{ fontFamily: 'var(--font-body)' }}>
                      AI Bot Lights On/Off
                    </p>
                    <Toggle 
                      checked={config.scannerActive} 
                      onChange={(checked) => updateConfig({ scannerActive: checked })} 
                    />
                  </div>
                </>
              )}
            />

            {/* Expression Section */}
            <PanelCard 
              title="Expression"
              description="What is AI feeling or doing?"
              children={(
                <div className="flex flex-col gap-2.5">
                  {[
                    ['happy', 'sad'],
                    ['neutral', 'wink'],
                    ['surprised', 'loopy'],
                    ['thinking', 'sleeping']
                  ].map((row, idx) => (
                    <div key={idx} className="flex gap-2.5">
                      {row.map((exp) => (
                        <button
                          key={exp}
                          onClick={() => updateConfig({ expression: exp as any })}
                          className={`flex-1 flex items-center justify-center gap-2 px-3 py-1.5 rounded border transition-colors text-sm ${
                            config.expression === exp
                              ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white'
                              : 'bg-white border-[#b7c1cb] text-[var(--color-foreground)] hover:bg-[#dfe3e9]'
                          }`}
                          style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}
                        >
                          <span className="text-lg leading-none">
                            {exp === 'happy' && <FontAwesomeIcon icon={faFaceSmile} size="sm" />}
                            {exp === 'sad' && <FontAwesomeIcon icon={faFaceFrown} size="sm" />}
                            {exp === 'neutral' && <FontAwesomeIcon icon={faFaceMeh} size="sm" />}
                            {exp === 'wink' && <FontAwesomeIcon icon={faFaceGrinWink} size="sm" />}
                            {exp === 'surprised' && <FontAwesomeIcon icon={faFaceSurprise} size="sm" />}
                            {exp === 'loopy' && <FontAwesomeIcon icon={faFaceDizzy} size="sm" />}
                            {exp === 'thinking' && <FontAwesomeIcon icon={faCommentDots} size="sm" />}
                            {exp === 'sleeping' && <FontAwesomeIcon icon={faBed} size="sm" />}
                          </span>
                          <span className="capitalize">{exp}</span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            />

            {/* Looking Direction Section */}
            <PanelCard
              title="Looking Direction"
              description="Where is AI bot looking?"
              children={(
                <OrientationSlider
                  value={config.orientation}
                  onChange={(value) => updateConfig({ orientation: value })}
                />
              )}
            />

            {/* Lights toggle moved under Color card */}
          </div>
        )}

        {activeTab === 'accessories' && (
          <div className="flex flex-col gap-2">
            {/* Apparel Section */}
            <PanelCard
              title="Apparel"
              description="Clothing and wearable items"
              children={(
                <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
                  <Chip
                    label="Sunglasses"
                    icon={<FontAwesomeIcon icon={faGlasses} size="sm" />}
                    isActive={config.accessories.apparel.includes('sunglasses')}
                    onClick={() => toggleApparelAccessory('sunglasses')}
                  />
                  <Chip
                    label="Hat"
                    icon={<FontAwesomeIcon icon={faHatWizard} size="sm" />}
                    isActive={config.accessories.apparel.includes('hat')}
                    onClick={() => toggleApparelAccessory('hat')}
                  />
                  <Chip
                    label="Headphones"
                    icon={<FontAwesomeIcon icon={faHeadphones} size="sm" />}
                    isActive={config.accessories.apparel.includes('headphones')}
                    onClick={() => toggleApparelAccessory('headphones')}
                  />
                </div>
              )}
            />

            {/* Emotes Section */}
            <PanelCard
              title="Emotes"
              description="Expressive elements and symbols"
              children={(
                <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
                  <Chip
                    label="Zzzs"
                    icon={<FontAwesomeIcon icon={faBed} size="sm" />}
                    isActive={config.accessories.emotes.includes('zzz')}
                    onClick={() => toggleEmoteAccessory('zzz')}
                  />
                  <Chip
                    label="Sparkles"
                    icon={<FontAwesomeIcon icon={faStar} size="sm" />}
                    isActive={config.accessories.emotes.includes('sparkles')}
                    onClick={() => toggleEmoteAccessory('sparkles')}
                  />
                  <Chip
                    label="Question"
                    icon={<FontAwesomeIcon icon={faQuestion} size="sm" />}
                    isActive={config.accessories.emotes.includes('question')}
                    onClick={() => toggleEmoteAccessory('question')}
                  />
                </div>
              )}
            />

            {/* Misc Section */}
            <PanelCard
              title="Miscellaneous"
              description="Environmental effects"
              children={(
                <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
                  <Chip
                    label="Scanner Cone"
                    isActive={config.accessories.misc.includes('cone')}
                    onClick={() => toggleMiscAccessory('cone')}
                  />
                  <Chip
                    label="Shadow"
                    isActive={config.accessories.misc.includes('shadow')}
                    onClick={() => toggleMiscAccessory('shadow')}
                  />
                </div>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}