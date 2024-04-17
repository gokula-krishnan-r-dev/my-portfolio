import { cn } from "@/lib/utils";
import React from "react";
import { useCurser } from "../provider/curserProvider";

interface LabelScrollProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

const LabelScroll: React.FC<LabelScrollProps> = ({
  text,
  className,
  containerClassName,
}) => {
  const { isActive, setIsActive } = useCurser();
  const repeatedText = `${text} ${text} ${text}`;

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={cn(
        "marquee-container  py-8  border-gray-700 border-t border-b ",
        containerClassName
      )}
    >
      <div className="marquee whitespace-nowrap animate-marquee">
        <p className={`text-8xl ${className || ""}`}>{repeatedText}</p>
      </div>
    </div>
  );
};

export default LabelScroll;
