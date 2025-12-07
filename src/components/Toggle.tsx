import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ checked, onChange, disabled = false }: ToggleProps) {
  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={`content-stretch flex h-[22px] items-center justify-between relative rounded-[100px] shrink-0 w-[44px] transition-colors group ${
        checked 
          ? 'bg-[var(--color-accent)] hover:bg-[#007785] pl-1 pr-[2px]' 
          : 'bg-[#a1aebb] hover:bg-[#768699] pl-[2px] pr-1'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      aria-checked={checked}
      role="switch"
    >
      {checked && (
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-sm text-center text-white w-[18px]">
          <FontAwesomeIcon icon={faCheck} className="text-xs" />
        </div>
      )}
      <div className="bg-white rounded-[23px] shrink-0 size-[18px]" />
      {!checked && (
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-sm text-center text-white w-[18px]">
          <FontAwesomeIcon icon={faXmark} className="text-xs" />
        </div>
      )}
    </button>
  );
}
