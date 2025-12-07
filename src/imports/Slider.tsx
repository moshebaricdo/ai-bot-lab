function ButtonLeft() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="Button Left">
      <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#292f36] text-[11px] text-center text-nowrap">
        <p className="leading-[1.25] whitespace-pre">arrow-left</p>
      </div>
    </div>
  );
}

function Filled() {
  return (
    <div className="basis-0 bg-[#c6ced6] grow h-[4px] min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Filled">
      <div className="size-full">
        <div className="h-[4px] w-full" />
      </div>
    </div>
  );
}

function Unfilled() {
  return (
    <div className="basis-0 bg-[#0093a4] grow h-[4px] min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Unfilled">
      <div className="size-full">
        <div className="h-[4px] w-full" />
      </div>
    </div>
  );
}

function Unfilled1() {
  return (
    <div className="basis-0 bg-[#c6ced6] grow h-[4px] min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Unfilled">
      <div className="size-full">
        <div className="h-[4px] w-full" />
      </div>
    </div>
  );
}

function SliderMask() {
  return (
    <div className="basis-0 bg-[#c6ced6] content-stretch flex grow h-[4px] items-center justify-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Slider Mask">
      <Filled />
      <Unfilled />
      {[...Array(2).keys()].map((_, i) => (
        <Unfilled1 key={i} />
      ))}
      <div className="absolute flex h-[8px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-0" style={{ "--transform-inner-width": "7.984375", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[8px]">
            <div className="absolute inset-[-1px_-12.5%]" style={{ "--stroke-0": "rgba(41, 47, 54, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
                <path d="M1 1H9" id="Line 67" stroke="var(--stroke-0, #292F36)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FillLayer() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-4px] relative shrink-0 w-full" data-name="Fill Layer">
      <SliderMask />
    </div>
  );
}

function Filled1() {
  return (
    <div className="basis-0 bg-[#0093a4] grow h-[4px] min-h-px min-w-px opacity-0 relative shrink-0" data-name="Filled">
      <div className="size-full">
        <div className="h-[4px] w-full" />
      </div>
    </div>
  );
}

function Filled2() {
  return (
    <div className="basis-0 bg-[#c6ced6] grow h-[4px] min-h-px min-w-px opacity-0 relative shrink-0" data-name="Filled">
      <div className="size-full">
        <div className="h-[4px] w-full" />
      </div>
    </div>
  );
}

function Unfilled2() {
  return (
    <div className="basis-0 bg-[#c6ced6] grow h-[4px] min-h-px min-w-px opacity-0 relative shrink-0" data-name="Unfilled">
      <div className="size-full">
        <div className="h-[4px] w-full" />
      </div>
    </div>
  );
}

function SliderMask1() {
  return (
    <div className="basis-0 content-stretch flex grow h-[4px] items-center justify-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Slider Mask">
      <Filled1 />
      <div className="relative shrink-0 size-[14px]" data-name="Knob">
        <div className="absolute inset-[-14.29%_-21.43%_-28.57%_-21.43%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(41, 47, 54, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g filter="url(#filter0_d_39_4723)" id="Knob">
              <circle cx="10" cy="9" fill="var(--fill-0, white)" r="7" />
              <circle cx="10" cy="9" r="6" stroke="var(--stroke-0, #292F36)" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_39_4723" width="20" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_39_4723" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_39_4723" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Filled2 />
      {[...Array(2).keys()].map((_, i) => (
        <Unfilled2 key={i} />
      ))}
    </div>
  );
}

function KnobOverlay() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-4px] relative shrink-0 w-full" data-name="Knob Overlay">
      <SliderMask1 />
    </div>
  );
}

function SliderBar() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="Slider Bar">
      <FillLayer />
      <KnobOverlay />
    </div>
  );
}

function ButtonRight() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0" data-name="Button Right">
      <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#292f36] text-[11px] text-center text-nowrap">
        <p className="leading-[1.25] whitespace-pre">arrow-right</p>
      </div>
    </div>
  );
}

function SliderWrapTop() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Slider Wrap Top">
      <ButtonLeft />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <SliderBar />
      </div>
      <ButtonRight />
    </div>
  );
}

function SliderContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Slider Container">
      <SliderWrapTop />
    </div>
  );
}

export default function Slider() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[4px] px-0 relative size-full" data-name="Slider">
      <SliderContainer />
    </div>
  );
}