'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// mở rộng Window để có type
declare global {
  interface Window {
    __pageTransitionCover?: () => Promise<void>;
  }
}

const paths = {
  step1: {
    unfilled: 'M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z',
    inBetween: 'M 0 0 h 43 c -60 55 140 65 0 100 H 0 V 0 Z',
    filled: 'M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z',
  },
  step2: {
    filled: 'M 100 0 H 0 c 0 50 0 50 0 100 h 100 V 50 Z',
    inBetween: 'M 100 0 H 50 c 28 43 4 81 0 100 h 50 V 0 Z',
    unfilled: 'M 100 0 H 100 c 0 50 0 50 0 100 h 0 V 0 Z',
  },
} as const;

export default function PageTransition() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const isAnimatingRef = useRef(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null); // 

  useEffect(() => {
    if (!pathRef.current) return;

    const tl = gsap.timeline({ paused: true });
    tl
      .set(pathRef.current, { attr: { d: paths.step1.unfilled } })
      .to(pathRef.current, { duration: 0.8, ease: 'power3.in', attr: { d: paths.step1.inBetween } }, 0)
      .to(pathRef.current, { duration: 0.2, ease: 'power1',      attr: { d: paths.step1.filled } })
      .set(pathRef.current, { attr: { d: paths.step2.filled } })
      .to(pathRef.current, { duration: 0.15, ease: 'sine.in',     attr: { d: paths.step2.inBetween } })
      .to(pathRef.current, { duration: 1,    ease: 'power4',      attr: { d: paths.step2.unfilled } });

    tlRef.current = tl;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cover = (): Promise<void> => new Promise((resolve) => {
      const tl = tlRef.current;
      if (!tl) return resolve();
      if (isAnimatingRef.current) return resolve();

      isAnimatingRef.current = true;

      tl.eventCallback('onComplete', () => {
        isAnimatingRef.current = false;
        resolve();
      });

      tl.play(0);
    });

    window.__pageTransitionCover = cover;
    return () => { delete window.__pageTransitionCover; };
  }, []);

return (
  <svg
    className="pointer-events-none fixed inset-0 z-[999] h-screen w-screen text-teal-500/80"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      ref={pathRef}
      className="overlay__path"
      vectorEffect="non-scaling-stroke"
      d="M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z"
      fill="currentColor"
    />
  </svg>
);
}
