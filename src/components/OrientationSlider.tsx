import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface OrientationSliderProps {
  value: 'far-left' | 'left' | 'center' | 'right' | 'far-right';
  onChange: (value: 'far-left' | 'left' | 'center' | 'right' | 'far-right') => void;
}

const STEPS = ['far-left', 'left', 'center', 'right', 'far-right'] as const;

export function OrientationSlider({ value, onChange }: OrientationSliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const currentIndex = STEPS.indexOf(value);
  const progress = currentIndex / (STEPS.length - 1);
  
  // Calculate fill position from center (50%)
  const centerPosition = 50; // Center is at 50%
  const fillStart = Math.min(centerPosition, progress * 100);
  const fillWidth = Math.abs(progress * 100 - centerPosition);

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    onChange(STEPS[newIndex]);
  };

  const handleNext = () => {
    const newIndex = Math.min(STEPS.length - 1, currentIndex + 1);
    onChange(STEPS[newIndex]);
  };

  const getStepFromPosition = (clientX: number) => {
    if (!sliderRef.current) return currentIndex;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const stepIndex = Math.round(percentage * (STEPS.length - 1));
    
    return stepIndex;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const stepIndex = getStepFromPosition(e.clientX);
    onChange(STEPS[stepIndex]);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const stepIndex = getStepFromPosition(e.clientX);
      onChange(STEPS[stepIndex]);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onChange]);

  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[4px] px-0 relative w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
          {/* Left Button */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex items-center justify-center relative rounded-[4px] shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#dfe3e9] transition-colors p-1 h-[24px] w-[24px]"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-[#292f36] text-[11px]" />
          </button>

          {/* Slider Bar Container */}
          <div className="flex-1 flex items-center relative h-[24px]">
            <div 
              ref={sliderRef}
              className="w-full h-[4px] bg-[#c6ced6] rounded-[4px] relative cursor-pointer overflow-visible"
              onMouseDown={handleMouseDown}
            >
              {/* Filled portion */}
              <div 
                className="absolute top-0 h-full bg-[var(--color-accent)] z-0"
                style={{ left: `${fillStart}%`, width: `${fillWidth}%` }}
              />
              
              {/* Step indicators - All positions including edges */}
              <div className="absolute flex items-center justify-between left-0 right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                {STEPS.map((_, index) => (
                  <div
                    key={index}
                    className="absolute top-0"
                    style={{ left: `${(index / (STEPS.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="w-[2px] h-[8px] bg-[#292F36] rounded-full" />
                  </div>
                ))}
              </div>

              {/* Knob */}
              <div
                className="group absolute w-4 h-4 cursor-grab active:cursor-grabbing z-[999] pointer-events-auto"
                style={{
                  left: `${progress * 100}%`,
                  top: '-6px',
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="w-full h-full rounded-full border-2 border-[#292F36] bg-[#FFFFFF] shadow-sm transition-colors group-hover:bg-[#ECEFF3]" />
              </div>
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === STEPS.length - 1}
            className="flex items-center justify-center relative rounded-[4px] shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#dfe3e9] transition-colors p-1 h-[24px] w-[24px]"
          >
            <FontAwesomeIcon icon={faArrowRight} className="text-[#292f36] text-[11px]" />
          </button>
        </div>
      </div>
    </div>
  );
}