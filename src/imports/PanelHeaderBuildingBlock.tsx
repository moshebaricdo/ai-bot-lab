function VisibilityWrapper() {
  return <div className="content-stretch flex flex-col items-start min-w-[50px] shrink-0" data-name="Visibility Wrapper" />;
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Label Wrapper">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#69788a] text-[12px] text-center text-nowrap tracking-[0.48px] uppercase">
        <p className="leading-[19.68px] whitespace-pre">Preview</p>
      </div>
    </div>
  );
}

function IconToggleButton() {
  return (
    <div className="bg-[#e0f8f9] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Icon Toggle Button">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0093a4] text-[13px] text-center w-[16px]">
        <p className="leading-[1.25]">sun</p>
      </div>
    </div>
  );
}

function IconToggleButton1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Icon Toggle Button">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#69788a] text-[13px] text-center w-[16px]">
        <p className="leading-[1.25]">moon</p>
      </div>
    </div>
  );
}

function ToggleGroup() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Toggle Group">
      <IconToggleButton />
      <IconToggleButton1 />
    </div>
  );
}

function IconToggleGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Icon Toggle Group">
      <ToggleGroup />
    </div>
  );
}

function ActionGroupRight() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end min-w-[50px] relative shrink-0 w-full" data-name="Action Group Right">
      <IconToggleGroup />
    </div>
  );
}

function VisibilityWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[50px]" data-name="Visibility Wrapper">
      <ActionGroupRight />
    </div>
  );
}

export default function PanelHeaderBuildingBlock() {
  return (
    <div className="bg-white relative size-full" data-name="Panel Header Building Block">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[8px] py-[4px] relative size-full">
          <VisibilityWrapper />
          <LabelWrapper />
          <VisibilityWrapper1 />
        </div>
      </div>
    </div>
  );
}