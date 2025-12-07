import { ReactNode } from 'react';

interface ChipProps {
  label: string;
  icon?: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export function Chip({ label, icon, isActive, onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[100px] shrink-0 transition-colors ${
        icon ? 'gap-[6px]' : ''
      } ${
        isActive
          ? 'bg-[var(--color-accent)] text-white'
          : 'bg-white text-[var(--color-foreground)] hover:bg-[#dfe3e9]'
      }`}
    >
      {!isActive && (
        <div 
          aria-hidden="true" 
          className="absolute border border-[var(--color-muted)] border-solid inset-0 pointer-events-none rounded-[100px]" 
        />
      )}
      {icon && (
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-center w-[18px]">
          {icon}
        </div>
      )}
      <p 
        className="leading-[21.56px] not-italic relative shrink-0 text-nowrap whitespace-pre"
        style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)', fontSize: '14px' }}
      >
        {label}
      </p>
    </button>
  );
}