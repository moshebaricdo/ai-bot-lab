import svgPaths from "./svg-hkj5dhqh02";

function AiBot() {
  return (
    <div className="absolute inset-[1.39%_-8.82%_1.39%_-11.27%]" data-name="AI Bot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
        <g id="AI Bot">
          <g id="Subtract">
            <path d={svgPaths.p28570c80} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p15c93700} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
          <g id="Union">
            <path d={svgPaths.p3fe3e400} fill="var(--fill-0, #3CFFF8)" />
            <path d={svgPaths.p1cef6200} fill="var(--fill-0, #3CFFF8)" />
            <path d={svgPaths.p17679900} fill="var(--fill-0, #3CFFF8)" />
            <path d={svgPaths.p15492600} fill="var(--fill-0, #3CFFF8)" />
            <path d={svgPaths.pba2b4f0} fill="var(--fill-0, #3CFFF8)" />
            <path d={svgPaths.p1903b000} fill="var(--fill-0, #3CFFF8)" />
            <path d={svgPaths.paa05100} fill="var(--fill-0, #3CFFF8)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AiBot1() {
  return (
    <div className="h-[20.774px] relative shrink-0 w-[14.715px]" data-name="AI Bot">
      <AiBot />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <AiBot1 />
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[13px] whitespace-pre">AI Bot Generator</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dfe3e9] text-[16px] text-center text-nowrap">
        <p className="leading-[13px] whitespace-pre">Use this tool to create your very own AI bot!</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#292f36] h-[44.774px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[44.774px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function VisibilityWrapper() {
  return <div className="content-stretch flex flex-col items-start min-w-[50px] shrink-0" data-name="Visibility Wrapper" />;
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Label Wrapper">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#69788a] text-[12px] text-center text-nowrap tracking-[0.48px] uppercase">
        <p className="leading-[19.68px] whitespace-pre">customize</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#69788a] text-[13px] text-center w-[16px]">
        <p className="leading-[1.25]">arrow-rotate-left</p>
      </div>
    </div>
  );
}

function ActionGroupRight() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end min-w-[50px] relative shrink-0 w-full" data-name="Action Group Right">
      <Button />
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

function Tab() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center pb-[10px] pt-[8px] px-0 relative shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#0093a4] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#292f36] text-[14px] text-center w-[18px]">
        <p className="leading-[1.25]">robot</p>
      </div>
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-nowrap whitespace-pre">Body</p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center not-italic pb-[10px] pt-[8px] px-0 relative shrink-0 text-[#576575] text-[14px]" data-name="Tab">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 text-center w-[18px]">
        <p className="leading-[1.25]">paintbrush</p>
      </div>
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Color</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center not-italic pb-[10px] pt-[8px] px-0 relative shrink-0 text-[#576575] text-[14px]" data-name="Tab">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 text-center w-[18px]">
        <p className="leading-[1.25]">Sunglasses</p>
      </div>
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Accessories</p>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab Group">
      <div aria-hidden="true" className="absolute border-[#d4dae1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex gap-[16px] items-start px-[16px] py-0 relative w-full">
          <Tab />
          <Tab1 />
          <Tab2 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px]">
        <p className="leading-[21.56px] text-nowrap whitespace-pre">Expression</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center relative shrink-0 text-[#576575] text-[12px]">
        <p className="leading-[19.68px] text-nowrap whitespace-pre">What is AI feeling or doing?</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#0093a4] grow min-h-px min-w-[32px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0093a4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[14px] text-center text-white w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">smile</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Happy</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[32px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#292f36] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">frown</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Sad</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[32px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#292f36] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">meh</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Neutral</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[32px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#292f36] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">face-grin-wink</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Wink</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[32px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#292f36] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">face-surprise</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Surprised</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[32px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#292f36] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">spiral</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Loopy</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[32px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#292f36] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">ellipsis</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Thinking</p>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[32px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#292f36] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">zzz</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Sleeping</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d4dae1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative w-full">
          <Frame15 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-center text-nowrap">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px]">
        <p className="leading-[21.56px] text-nowrap whitespace-pre">Looking Direction</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center relative shrink-0 text-[#576575] text-[12px]">
        <p className="leading-[19.68px] text-nowrap whitespace-pre">Where is AI bot looking?</p>
      </div>
    </div>
  );
}

function SegmentedButtonBlock() {
  return (
    <div className="basis-0 bg-[#0093a4] grow min-h-px min-w-[32px] mr-[-1px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Segmented Button Block">
      <div aria-hidden="true" className="absolute border border-[#0093a4] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[10px] py-[5px] relative w-full">
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Front</p>
        </div>
      </div>
    </div>
  );
}

function SegmentedButtonBlock1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[32px] mr-[-1px] relative rounded-[4px] shrink-0" data-name="Segmented Button Block">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[10px] py-[5px] relative w-full">
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-nowrap whitespace-pre">Left</p>
        </div>
      </div>
    </div>
  );
}

function SegmentedButtonBlock2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[32px] mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Segmented Button Block">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[10px] py-[5px] relative w-full">
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-nowrap whitespace-pre">Right</p>
        </div>
      </div>
    </div>
  );
}

function SegmentedButtonGroup() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-px py-0 relative shrink-0 w-full" data-name="Segmented Button Group">
      <SegmentedButtonBlock />
      <SegmentedButtonBlock1 />
      <SegmentedButtonBlock2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SegmentedButtonGroup />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d4dae1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative w-full">
          <Frame14 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px] text-center text-nowrap">
        <p className="leading-[21.56px] whitespace-pre">Additional Details</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#576575] text-[12px] w-[min-content]">
        <p className="leading-[19.68px]">Use these when communicating that AI bot is interacting with other on-screen elements.</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-nowrap whitespace-pre">Bottom scanner light</p>
    </div>
  );
}

function ToggleBuildingBlock() {
  return (
    <div className="bg-[#a1aebb] content-stretch flex h-[22px] items-center justify-between pl-[2px] pr-[4px] py-0 relative rounded-[100px] shrink-0 w-[44px]" data-name="Toggle Building Block">
      <div className="bg-white rounded-[23px] shrink-0 size-[18px]" data-name="Handle" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[18px]">
        <p className="leading-[1.25]">xmark</p>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Toggle">
      <Frame17 />
      <ToggleBuildingBlock />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-nowrap whitespace-pre">Top lid open</p>
    </div>
  );
}

function ToggleBuildingBlock1() {
  return (
    <div className="bg-[#a1aebb] content-stretch flex h-[22px] items-center justify-between pl-[2px] pr-[4px] py-0 relative rounded-[100px] shrink-0 w-[44px]" data-name="Toggle Building Block">
      <div className="bg-white rounded-[23px] shrink-0 size-[18px]" data-name="Handle" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[18px]">
        <p className="leading-[1.25]">xmark</p>
      </div>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Toggle">
      <Frame19 />
      <ToggleBuildingBlock1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d4dae1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[16px] pt-[12px] px-[16px] relative w-full">
          <Frame18 />
          <Toggle />
          <Toggle1 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-[#f0f2f5] grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[10px] relative size-full">
          <Frame13 />
          <Frame12 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function VisibilityWrapper2() {
  return <div className="content-stretch flex flex-col items-start min-w-[50px] shrink-0" data-name="Visibility Wrapper" />;
}

function LabelWrapper1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Label Wrapper">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#69788a] text-[12px] text-center text-nowrap tracking-[0.48px] uppercase">
        <p className="leading-[19.68px] whitespace-pre">export options</p>
      </div>
    </div>
  );
}

function VisibilityWrapper3() {
  return <div className="content-stretch flex flex-col items-start shrink-0 w-[50px]" data-name="Visibility Wrapper" />;
}

function PanelHeaderBuildingBlock1() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Panel Header Building Block">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[8px] py-[4px] relative w-full">
          <VisibilityWrapper2 />
          <LabelWrapper1 />
          <VisibilityWrapper3 />
        </div>
      </div>
    </div>
  );
}

function PanelHeaderV1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Panel Header V2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <PanelHeaderBuildingBlock1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4dae1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame22() {
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
      <Frame22 />
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

function Button9() {
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
          <Button9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d4dae1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame25() {
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
      <Frame25 />
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

function Button10() {
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
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <VersionHistoryItem />
      <VersionHistoryItem1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <PanelHeaderV1 />
        <Frame23 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4dae1] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-full relative shrink-0 w-[300px]">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit] w-[300px]">
        <PanelHeaderV />
        <TabGroup />
        <Frame6 />
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4dae1] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function VisibilityWrapper4() {
  return <div className="content-stretch flex flex-col items-start min-w-[50px] shrink-0" data-name="Visibility Wrapper" />;
}

function LabelWrapper2() {
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

function ActionGroupRight1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end min-w-[50px] relative shrink-0 w-full" data-name="Action Group Right">
      <IconToggleGroup />
    </div>
  );
}

function VisibilityWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[50px]" data-name="Visibility Wrapper">
      <ActionGroupRight1 />
    </div>
  );
}

function PanelHeaderBuildingBlock2() {
  return (
    <div className="bg-white min-h-[40px] relative shrink-0 w-full" data-name="Panel Header Building Block">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[8px] py-[4px] relative w-full">
          <VisibilityWrapper4 />
          <LabelWrapper2 />
          <VisibilityWrapper5 />
        </div>
      </div>
    </div>
  );
}

function PanelHeaderV2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Panel Header V2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <PanelHeaderBuildingBlock2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4dae1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[39.458px] left-0 top-[246.35px] w-[314.854px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 315 40">
        <g id="Group 394">
          <path d={svgPaths.p1ed98980} fill="var(--fill-0, #3CFFF8)" id="Ellipse 303" />
          <path d={svgPaths.p24f0e500} fill="var(--fill-0, #3CFFF8)" id="Ellipse 304" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[91.311px] left-[129.69px] top-[0.24px] w-[53.263px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 92">
        <g id="Group 389">
          <g id="Union">
            <path d={svgPaths.p375c2b00} fill="var(--fill-0, #7ECDCA)" />
            <path d={svgPaths.p375c2b00} fill="var(--fill-1, #7D8E9E)" />
            <path d={svgPaths.p375c2b00} fill="var(--fill-2, #828282)" />
          </g>
          <g id="Rectangle 156">
            <path d={svgPaths.p3559df0} fill="var(--fill-0, #D0E2EE)" />
            <path d={svgPaths.p3559df0} fill="var(--fill-1, #F2F2F2)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[30.843px] left-[193.47px] top-[352.04px] w-[53.926px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 31">
        <g id="Group 433">
          <g id="AI">
            <path d={svgPaths.pfd34180} fill="var(--fill-0, white)" />
            <path d={svgPaths.pfd34180} fill="var(--fill-1, #7ECDCA)" />
            <path d={svgPaths.pfd34180} fill="var(--fill-2, #7ECDCA)" />
            <path d={svgPaths.pfd34180} fill="var(--fill-3, #828282)" />
          </g>
          <g id="AI_2">
            <path d={svgPaths.p1784be80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1784be80} fill="var(--fill-1, #7ECDCA)" />
            <path d={svgPaths.p1784be80} fill="var(--fill-2, #7ECDCA)" />
            <path d={svgPaths.p1784be80} fill="var(--fill-3, #828282)" />
          </g>
          <g id="AI_3">
            <path d={svgPaths.p3ca8de00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ca8de00} fill="var(--fill-1, #7ECDCA)" />
            <path d={svgPaths.p3ca8de00} fill="var(--fill-2, #7ECDCA)" />
            <path d={svgPaths.p3ca8de00} fill="var(--fill-3, #828282)" />
          </g>
          <g id="AI_4">
            <path d={svgPaths.p384a97c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p384a97c0} fill="var(--fill-1, #7ECDCA)" />
            <path d={svgPaths.p384a97c0} fill="var(--fill-2, #7ECDCA)" />
            <path d={svgPaths.p384a97c0} fill="var(--fill-3, #828282)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[193.47px] top-[352.04px]">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[193.47px] top-[352.04px]">
      <Group1 />
    </div>
  );
}

function AiFaceNeutralSmile() {
  return (
    <div className="absolute h-[31.332px] left-[89.62px] top-[252.36px] w-[134.966px]" data-name="Ai Face_neutral smile">
      <div className="absolute inset-[-163.25%_-37.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 134">
          <g filter="url(#filter0_d_8_5683)" id="Ai Face_neutral smile">
            <path d={svgPaths.pa0c1700} fill="var(--fill-0, #3CFFF8)" id="Ellipse 93" />
            <path d={svgPaths.p2103800} fill="var(--fill-0, #3CFFF8)" id="Ellipse 95 (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p1c39c480} fill="var(--fill-0, #3CFFF8)" fillRule="evenodd" id="Ellipse 95 (Stroke) (Stroke)" />
            <path d={svgPaths.p2db3f280} fill="var(--fill-0, #3CFFF8)" id="Ellipse 94" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="133.63" id="filter0_d_8_5683" width="237.263" x="6.10352e-07" y="-1.52588e-06">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="25.5744" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.235294 0 0 0 0 1 0 0 0 0 0.972549 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_5683" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_5683" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[43.44px] top-[208.22px]">
      <div className="absolute h-[109.063px] left-[43.44px] top-[208.22px] w-[228.272px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 229 110">
          <g id="Rectangle 146">
            <path d={svgPaths.p2a5a1280} fill="var(--fill-0, #143441)" />
            <path d={svgPaths.p2a5a1280} fill="var(--fill-1, #0C1F26)" />
          </g>
        </svg>
      </div>
      <AiFaceNeutralSmile />
    </div>
  );
}

function AiBot2() {
  return (
    <div className="absolute contents left-1/2 top-0 translate-x-[-50%]" data-name="AI bot">
      <div className="absolute left-[73.88px] size-[172.472px] top-[342.64px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173 173">
          <g id="Rectangle 273">
            <path d={svgPaths.p27361300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27361300} fill="var(--fill-1, #3CFFF8)" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[27.9px] left-[66.27px] top-[459.32px] w-[182.617px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 28">
          <g id="Rectangle 161">
            <path d={svgPaths.p1255b600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1255b600} fill="var(--fill-1, #F2F2F2)" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[38.045px] left-[0.32px] top-[246.27px] w-[40.582px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 39">
          <path d={svgPaths.p31c5bf80} fill="var(--fill-0, #828282)" id="Ellipse 301" />
        </svg>
      </div>
      <Group3 />
      <Group2 />
      <div className="absolute h-[375.38px] left-[18.22px] top-[81.4px] w-[278.999px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 279 376">
          <path d={svgPaths.p4f11400} fill="var(--fill-0, white)" id="Rectangle 275" />
        </svg>
      </div>
      <Group4 />
      <div className="absolute h-[7.609px] left-[66.27px] top-[456.79px] w-[182.617px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 8">
          <path d="M0 0H182.617V7.60905H0V0Z" fill="var(--fill-0, #828282)" id="Rectangle 271" />
        </svg>
      </div>
      <div className="absolute h-[6.954px] left-[18.08px] top-[187.93px] w-[278.999px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 279 7">
          <path d="M0 0H278.999V6.95427H0V0Z" fill="var(--fill-0, #828282)" id="Rectangle 272" />
        </svg>
      </div>
      <Group />
      <div className="absolute h-[48.737px] left-[132.29px] top-0 w-[48.149px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
          <path d={svgPaths.p3582a670} fill="var(--fill-0, #3CFFF8)" id="Rectangle 274" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}

function AiBotNoOutline() {
  return (
    <div className="h-[515.111px] overflow-clip relative shrink-0 w-[314.856px]" data-name="AI Bot_No Outline">
      <AiBot2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 bg-[#dfe3e9] content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      <AiBotNoOutline />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[1140px]">
      <PanelHeaderV2 />
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full">
      <Frame />
      <Frame24 />
    </div>
  );
}

export default function WebsiteTemplateLargeDesktop1440X() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Website Template: Large Desktop (1440x1024)">
      <Frame2 />
      <Frame5 />
    </div>
  );
}