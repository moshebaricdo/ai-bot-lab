import { useState } from 'react';
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
  faPaintRoller, 
  faGlasses,
  faHeadphones,
  faBed,
  faStar,
  faQuestion,
  faFillDrip,
  faHatWizard
} from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  config: CharacterConfig;
  setConfig: (config: CharacterConfig) => void;
  onReset: () => void;
}

type TabType = 'body' | 'color' | 'accessories';

export function Sidebar({ config, setConfig, onReset }: SidebarProps) {
  const [activeTab, setActiveTab] = useState<TabType>('body');

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

  const presetColors = [
    '#3CFFF8', '#9657C7', '#ED6060', '#FFB42E', '#3EA33E'
  ];

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
          
          <button
            onClick={() => setActiveTab('color')}
            className={`flex items-center gap-1.5 pb-2.5 pt-2 relative group ${
              activeTab === 'color' ? 'text-[var(--color-foreground)]' : 'text-[#576575] hover:text-[#0093a4]'
            }`}
          >
            {activeTab === 'color' ? (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)]" />
            ) : (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0093a4] opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            <span className="text-sm"><FontAwesomeIcon icon={faPaintRoller} size="sm" /></span>
            <span className="text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>Color</span>
          </button>
          
          <button
            onClick={() => setActiveTab('accessories')}
            className={`flex items-center gap-1.5 pb-2.5 pt-2 relative group ${
              activeTab === 'accessories' ? 'text-[var(--color-foreground)]' : 'text-[#576575] hover:text-[#0093a4]'
            }`}
          >
            {activeTab === 'accessories' ? (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)]" />
            ) : (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0093a4] opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            <span className="text-sm"><FontAwesomeIcon icon={faGlasses} size="sm" /></span>
            <span className="text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>Accessories</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-2.5 bg-[#f0f2f5]">
        {activeTab === 'body' && (
          <div className="flex flex-col gap-2">
            {/* Expression Section */}
            <PanelCard 
              title="Expression"
              description="What is AI feeling or doing?"
            >
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
            </PanelCard>

            {/* Looking Direction Section */}
            <PanelCard
              title="Looking Direction"
              description="Where is AI bot looking?"
            >
              <OrientationSlider
                value={config.orientation}
                onChange={(value) => updateConfig({ orientation: value })}
              />
            </PanelCard>

            {/* Additional Details Section */}
            <PanelCard
              title="Additional Details"
              description="Use these when communicating that AI bot is interacting with other on-screen elements."
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[var(--color-foreground)]" style={{ fontFamily: 'var(--font-body)' }}>
                    Bottom scanner light
                  </p>
                  <Toggle 
                    checked={config.scannerActive} 
                    onChange={(checked) => updateConfig({ scannerActive: checked })} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[var(--color-foreground)]" style={{ fontFamily: 'var(--font-body)' }}>
                    Top lid open
                  </p>
                  <Toggle 
                    checked={config.lidOpen} 
                    onChange={(checked) => updateConfig({ lidOpen: checked })} 
                  />
                </div>
              </div>
            </PanelCard>
          </div>
        )}

        {activeTab === 'color' && (
          <div className="flex flex-col gap-2">
            {/* Accent Color Card */}
            <PanelCard
              title="Accent Color"
              description="If using a custom color, ensure it has sufficient contrast with the bot's body."
            >
              {/* Color Preset Buttons */}
              <div className="content-stretch flex gap-2 items-start relative shrink-0 w-full mb-3">
                {presetColors.map(color => (
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
                {/* Custom Color Picker */}
                <label className={`flex items-center justify-center relative rounded-[var(--radius)] shrink-0 size-8 bg-white hover:opacity-80 transition-all cursor-pointer ${
                  !presetColors.includes(config.accentColor) ? 'outline outline-2 outline-[var(--color-accent)] outline-offset-2' : ''
                }`}>
                  <input
                    type="color"
                    value={config.accentColor}
                    onChange={(e) => updateConfig({ accentColor: e.target.value })}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <FontAwesomeIcon icon={faFillDrip} className="text-[var(--color-foreground)] relative z-10" />
                  <div aria-hidden="true" className="absolute border border-[rgba(41,47,54,0.2)] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                </label>
              </div>

              {/* Glow Toggle */}
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                  <p className="leading-[21.56px] not-italic relative shrink-0 text-[var(--color-foreground)] text-sm text-nowrap whitespace-pre" style={{ fontFamily: 'var(--font-body)' }}>Full-body glow</p>
                  <p className="text-xs text-[#576575] mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>Set to 80% opacity of accent color.</p>
                </div>
                <Toggle 
                  checked={config.glowEnabled} 
                  onChange={(checked) => updateConfig({ glowEnabled: checked })} 
                />
              </div>
            </PanelCard>
          </div>
        )}

        {activeTab === 'accessories' && (
          <div className="flex flex-col gap-2">
            {/* Apparel Section */}
            <PanelCard
              title="Apparel"
              description="Clothing and wearable items"
            >
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
            </PanelCard>

            {/* Emotes Section */}
            <PanelCard
              title="Emotes"
              description="Expressive elements and symbols"
            >
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
            </PanelCard>

            {/* Misc Section */}
            <PanelCard
              title="Miscellaneous"
              description="Environmental effects"
            >
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
            </PanelCard>
          </div>
        )}
      </div>
    </div>
  );
}