"use client";

import { useEffect } from "react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = ""
}: AnimatedCounterProps) {
  const { formattedValue, startAnimation, isAnimating } = useCounterAnimation({
    end,
    duration,
    delay,
    decimals,
    suffix,
    prefix
  });

  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (hasIntersected && !isAnimating) {
      startAnimation();
    }
  }, [hasIntersected, startAnimation, isAnimating]);

  return (
    <span
      ref={ref}
      className={`inline-block font-bold transition-all duration-300 ${className}`}
    >
      {formattedValue}
    </span>
  );
}