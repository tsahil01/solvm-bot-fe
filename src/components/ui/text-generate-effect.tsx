"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[index]);
        setIndex((prev) => prev + 1);
      }, 15); // Speed of text generation

      return () => clearTimeout(timeout);
    }
  }, [index, words]);

  return (
    <div className={cn("font-normal", className)}>
      {displayedText}
      {index < words.length && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};