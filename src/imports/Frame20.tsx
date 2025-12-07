function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px] text-center text-nowrap">
        <p className="leading-[21.56px] whitespace-pre">Glow</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#576575] text-[12px] w-[min-content]">
        <p className="leading-[19.68px]">Set to 30% opacity of your chosen color.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-nowrap whitespace-pre">Full-body glow</p>
    </div>
  );
}

function ToggleBuildingBlock() {
  return (
    <div className="bg-[#0093a4] content-stretch flex h-[22px] items-center justify-between pl-[4px] pr-[2px] py-0 relative rounded-[100px] shrink-0 w-[44px]" data-name="Toggle Building Block">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[18px]">
        <p className="leading-[1.25]">check</p>
      </div>
      <div className="bg-white rounded-[23px] shrink-0 size-[18px]" data-name="Handle" />
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Toggle">
      <Frame1 />
      <ToggleBuildingBlock />
    </div>
  );
}

function SelectedDot() {
  return (
    <div className="bg-[#0093a4] relative rounded-[999px] shrink-0 size-[7px]" data-name="Selected Dot">
      <div className="size-full">
        <div className="size-[7px]" />
      </div>
    </div>
  );
}

function Ellipse() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Ellipse">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-[16px]">
        <SelectedDot />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#0093a4] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioButtonsBlocks() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-[16px]" data-name="Radio Buttons Blocks">
      <Ellipse />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="Radio Button">
      <RadioButtonsBlocks />
      <p className="basis-0 font-['Figtree:Regular',sans-serif] grow leading-[19.68px] min-h-px min-w-px not-italic relative shrink-0 text-[#292f36] text-[12px]">Match accent color (recommended)</p>
    </div>
  );
}

function Ellipse1() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[16px]" data-name="Ellipse">
      <div aria-hidden="true" className="absolute border-2 border-[#292f36] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioButtonsBlocks1() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pb-0 pt-[2px] px-0 relative shrink-0 w-[16px]" data-name="Radio Buttons Blocks">
      <Ellipse1 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="Radio Button">
      <RadioButtonsBlocks1 />
      <p className="basis-0 font-['Figtree:Regular',sans-serif] grow leading-[19.68px] min-h-px min-w-px not-italic relative shrink-0 text-[#292f36] text-[12px]">Custom color</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative rounded-[4px] size-full">
      <div aria-hidden="true" className="absolute border border-[#d4dae1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
          <Frame />
          <Toggle />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(212, 218, 225, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 1">
                <line id="Line 3" stroke="var(--stroke-0, #D4DAE1)" x2="248" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <RadioButton />
          <RadioButton1 />
        </div>
      </div>
    </div>
  );
}