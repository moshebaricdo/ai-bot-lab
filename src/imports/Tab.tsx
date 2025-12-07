export default function Tab() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center pb-[10px] pt-[8px] px-0 relative size-full" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#0093a4] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0093a4] text-[14px] text-center w-[18px]">
        <p className="leading-[1.25]">robot</p>
      </div>
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#0093a4] text-[14px] text-nowrap whitespace-pre">Body</p>
    </div>
  );
}