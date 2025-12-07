function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px] text-center text-nowrap">
        <p className="leading-[21.56px] whitespace-pre">{`Miscellaneous `}</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#576575] text-[12px] w-[min-content]">
        <p className="leading-[19.68px]">Environmental effects</p>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#0093a4] content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[100px] shrink-0" data-name="Chip">
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Scanner Cone</p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[5px] relative rounded-[100px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-nowrap whitespace-pre">Shadow</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
      <Chip />
      <Chip1 />
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