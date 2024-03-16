export function GridCell() {
  return (
    <div>
      {/* rotate slightly */}
      <div className="h-32 w-16 rounded-md border-[1.5px] border-gray-300 bg-none"></div>
    </div>
  );
}

export function Grid({ columns }: { columns: number }) {
  return (
    <>
      <div className="absolute left-0 top-0 z-[-10] flex h-1/2 w-full flex-col gap-1 overflow-hidden">
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
      </div>
      <div className="absolute z-[-1] h-1/2 w-full bg-gradient-to-b from-transparent to-white"></div>
    </>
  );
}
