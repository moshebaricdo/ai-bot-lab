import { ReactNode } from 'react';

interface PanelHeaderProps {
  title: string;
  /** Optional actions to show on the right side (buttons, etc.) */
  actions?: ReactNode;
}

export function PanelHeader({ title, actions }: PanelHeaderProps) {
  return (
    <div className="bg-white border-b border-[var(--color-muted)] px-2 h-[40px] flex items-center justify-between shrink-0">
      <div className="w-[50px]" />
      <p className="text-[12px] tracking-[0.48px] uppercase text-[#69788a]" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>
        {title}
      </p>
      <div className="w-[50px] flex items-center justify-end gap-0.5">
        {actions}
      </div>
    </div>
  );
}

interface PanelHeaderIconButtonProps {
  onClick: () => void;
  icon: ReactNode;
  title: string;
  isActive?: boolean;
}

export function PanelHeaderIconButton({ onClick, icon, title, isActive = false }: PanelHeaderIconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-[24px] h-[24px] flex items-center justify-center rounded transition-colors ${
        isActive ? 'bg-[var(--color-muted)]' : 'hover:bg-[var(--color-muted)]'
      }`}
      title={title}
    >
      <span className="text-[#69788a] text-[12px]">
        {icon}
      </span>
    </button>
  );
}