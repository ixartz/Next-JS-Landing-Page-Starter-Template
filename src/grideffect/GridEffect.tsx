import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function GridCell({ isHovered }: { isHovered: boolean }) {
  return (
    <div
    className="opacity-75"
    >
      <motion.div
      // as soon as it hovers, make the bg color #DDDCDC, and a second later mack to #F6F5F5
      initial={{ backgroundColor: "#F6F5F5" }}
      animate={{ backgroundColor: isHovered ? ["#F6F5F5", "#DDDCDC", "#F6F5F5"] : "#F6F5F5" }}
      transition={{ duration: 2 }}
      className="h-[100px] w-[50px] rounded-md border-[1.5px] border-gray-300 bg-[#F6F5F5]">
      </motion.div>
    </div>
  );
}

export function Grid({ columns }: { columns: number }) {
  const cellRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const foundCell = cellRefs.current.find((currentCell) => {
      if (!currentCell) return false;
      const rect = currentCell.getBoundingClientRect();
      return e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    });
    if (foundCell) {
      setHoveredCell(cellRefs.current.indexOf(foundCell));
    } else {
      setHoveredCell(null);
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="absolute left-0 top-0 z-[-10] flex w-full flex-col gap-1 overflow-hidden">
        {Array.from({ length: 6 }).map((__, i) => (
          <div key={i} className="relative left-0 top-0 z-[-10] flex w-full flex-row gap-1 overflow-hidden">
            {Array.from({ length: columns }).map((_, index) => (
              <div key={i * 40 + index} ref={(el) => {cellRefs.current[i * 40 + index] = el;}}>
                <GridCell
                isHovered={hoveredCell === i * 40 + index}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* set pointer events to none */}
      <div className="pointer-events-none absolute left-0 top-0 z-[-1] size-full bg-gradient-to-b from-transparent to-white">
      </div>
    </>
  );
}
