export function GridCell({ key }: { key: number; isSelected?: boolean }) {
  return (
    <div className="opacity-75" key={key}>
      {/* rotate slightly */}
      <div className="h-[100px] w-[50px] rounded-md border-[1.5px] border-gray-300 bg-[#F6F5F5]"></div>
    </div>
  );
}

export function Grid({ columns }: { columns: number }) {
  return (
    <>
      <div className="absolute left-0 top-0 z-[-10] flex w-full flex-col gap-1 overflow-hidden">
        <div className="relative left-0 top-0 z-[-10] flex w-full flex-row gap-1 overflow-hidden">
          {Array.from({ length: columns }).map((_, index) => (
            <GridCell key={index} />
          ))}
        </div>
        <div className="relative left-0 top-0 z-[-10] flex w-full flex-row gap-1 overflow-hidden">
          {Array.from({ length: columns }).map((_, index) => (
            <GridCell key={40 + index} />
          ))}
        </div>
        <div className="relative left-0 top-0 z-[-10] flex w-full flex-row gap-1 overflow-hidden">
          {Array.from({ length: columns }).map((_, index) => (
            <GridCell key={80 + index} />
          ))}
        </div>
        <div className="relative left-0 top-0 z-[-10] flex w-full flex-row gap-1 overflow-hidden">
          {Array.from({ length: columns }).map((_, index) => (
            <GridCell key={120 + index} />
          ))}
        </div>
        <div className="relative left-0 top-0 z-[-10] flex w-full flex-row gap-1 overflow-hidden">
          {Array.from({ length: columns }).map((_, index) => (
            <GridCell key={160 + index} />
          ))}
        </div>
        <div className="relative left-0 top-0 z-[-10] flex w-full flex-row gap-1 overflow-hidden">
          {Array.from({ length: columns }).map((_, index) => (
            <GridCell key={200 + index} />
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1] size-full bg-gradient-to-b from-transparent to-white"></div>
    </>
  );
}
