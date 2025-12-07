function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px] text-center text-nowrap">
        <p className="leading-[21.56px] whitespace-pre">Emotes</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#576575] text-[12px] w-[min-content]">
        <p className="leading-[19.68px]">Expressive elements and symbols</p>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#0093a4] content-stretch flex gap-[6px] items-center justify-center not-italic px-[12px] py-[5px] relative rounded-[100px] shrink-0 text-[14px] text-white" data-name="Chip">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 text-center w-[18px]">
        <p className="leading-[1.25]">zzz</p>
      </div>
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Zzzs</p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[5px] relative rounded-[100px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#292f36] text-[14px] text-center w-[18px]">
        <p className="leading-[1.25]">sparkles</p>
      </div>
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-nowrap whitespace-pre">Sparkles</p>
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[5px] relative rounded-[100px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#292f36] text-[14px] text-center w-[18px]">
        <p className="leading-[1.25]">question</p>
      </div>
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-nowrap whitespace-pre">Question</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
      <Chip />
      <Chip1 />
      <Chip2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative rounded-[4px] size-full">
      <div aria-hidden="true" className="absolute border border-[#d4dae1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
          <Frame />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}