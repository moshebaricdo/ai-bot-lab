function Button() {
  return (
    <div className="bg-white min-w-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#292f36] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">smile</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Button</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#dfe3e9] min-w-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#292f36] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">smile</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Button</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-w-[32px] px-[12px] py-[5px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b7c1cb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#292f36] text-[14px] text-center w-[18px]">
        <p className="leading-[1.25]">smile</p>
      </div>
      <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] not-italic relative shrink-0 text-[#292f36] text-[14px] text-center text-nowrap whitespace-pre">Button</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#0093a4] border-solid inset-[-2px] pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[2px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white min-w-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d4dae1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] not-italic px-[12px] py-[5px] relative text-[#d4dae1] text-[14px] text-center w-full">
          <div className="flex flex-col font-['Font_Awesome_7_Pro:Solid',sans-serif] justify-center leading-[0] relative shrink-0 w-[18px]">
            <p className="leading-[1.25]">smile</p>
          </div>
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[21.56px] relative shrink-0 text-nowrap whitespace-pre">Button</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full">
      <Button />
      <Button1 />
      <Button2 />
      <Button />
      <Button3 />
    </div>
  );
}