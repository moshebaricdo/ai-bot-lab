function VisibilityWrapper() {
  return <div className="content-stretch flex flex-col items-start min-w-[50px] shrink-0" data-name="Visibility Wrapper" />;
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Label Wrapper">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#69788a] text-[12px] text-center text-nowrap tracking-[0.48px] uppercase">
        <p className="leading-[19.68px] whitespace-pre">export options</p>
      </div>
    </div>
  );
}

function VisibilityWrapper1() {
  return <div className="content-stretch flex flex-col items-start shrink-0 w-[50px]" data-name="Visibility Wrapper" />;
}

function PanelHeaderBuildingBlock() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Panel Header Building Block">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[8px] py-[4px] relative w-full">
          <VisibilityWrapper />
          <LabelWrapper />
          <VisibilityWrapper1 />
        </div>
      </div>
    </div>
  );
}

function PanelHeaderV() {
  return (
    <div className="relative shrink-0 w-full" data-name="Panel Header V2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <PanelHeaderBuildingBlock />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4dae1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px]">
        <p className="leading-[21.56px] text-nowrap whitespace-pre">Export as SVG</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center relative shrink-0 text-[#424d59] text-[12px]">
        <p className="leading-[19.68px] text-nowrap whitespace-pre">If you need a vectorized graphic</p>
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
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#9657c7] content-stretch flex items-center p-[7px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[18px]">
        <p className="leading-[1.25]">download</p>
      </div>
    </div>
  );
}

function VersionHistoryItem() {
  return (
    <div className="min-h-[40px] relative shrink-0 w-full" data-name="Version History Item">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center min-h-[inherit] px-[16px] py-[12px] relative w-full">
          <Container />
          <Button />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d4dae1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px]">
        <p className="leading-[21.56px] text-nowrap whitespace-pre">Export as PNG</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center relative shrink-0 text-[#424d59] text-[12px]">
        <p className="leading-[19.68px] text-nowrap whitespace-pre">If you need a lossless image</p>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <Frame3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <TextContainer1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#9657c7] content-stretch flex items-center p-[7px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[18px]">
        <p className="leading-[1.25]">download</p>
      </div>
    </div>
  );
}

function VersionHistoryItem1() {
  return (
    <div className="min-h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Version History Item">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center min-h-[inherit] px-[16px] py-[12px] relative w-full">
          <Container1 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <VersionHistoryItem />
      <VersionHistoryItem1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="content-stretch flex flex-col items-start justify-center relative size-full">
        <PanelHeaderV />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4dae1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}