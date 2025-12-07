function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px] text-center text-nowrap">
        <p className="leading-[21.56px] whitespace-pre">Export as SVG</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#424d59] text-[12px] w-[min-content]">
        <p className="leading-[19.68px]">Useful if you need a vectorized graphic or plan to make further edits.</p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <Frame1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <TextContainer />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#9657c7] min-w-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[14px] text-center text-white w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">download</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Download</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative rounded-[4px] size-full">
      <div aria-hidden="true" className="absolute border border-[#d4dae1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
          <Container />
          <Button />
        </div>
      </div>
    </div>
  );
}