function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#292f36] text-[14px] text-center text-nowrap">
        <p className="leading-[21.56px] whitespace-pre">Accent Color</p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[#576575] text-[12px] w-[min-content]">
        <p className="leading-[19.68px]">If using a custom color, ensure it has sufficient contrast with the bot’s body.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3cfff7] content-stretch flex items-center justify-center p-[7px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(41,47,54,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#9657c7] content-stretch flex items-center justify-center p-[7px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(41,47,54,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ed6060] content-stretch flex items-center justify-center p-[7px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(41,47,54,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ffb42e] content-stretch flex items-center justify-center p-[7px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(41,47,54,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#3ea33e] content-stretch flex items-center justify-center p-[7px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(41,47,54,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative rounded-[4px] size-full">
      <div aria-hidden="true" className="absolute border border-[#d4dae1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative size-full">
          <Frame2 />
          <Frame />
        </div>
      </div>
    </div>
  );
}