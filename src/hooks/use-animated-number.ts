"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useAnimatedNumber(target: number, duration = 450) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const frameRef = useRef<number>(undefined);

  useEffect(() => {
    const from = fromRef.current;
    if (from === target) return;

    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(Math.round(from + (target - from) * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = target;
      }
    }

    frameRef.current = requestAnimationFrame(tick);

    // Safety net: rAF can be paused indefinitely on a backgrounded/throttled
    // tab — never leave the number stuck mid-count.
    const fallback = window.setTimeout(() => {
      fromRef.current = target;
      setValue(target);
    }, duration + 300);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.clearTimeout(fallback);
    };
  }, [target, duration]);

  return value;
}
