'use client';

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    import("animejs").then((animeModule) => {
      // @ts-ignore
      const anime = (animeModule.default || animeModule) as any;
      const main = document.querySelector("main");
      if (main) {
        const animation = anime({
          targets: main,
          translateX: [0, 100],
          duration: 1000,
          easing: "easeOutQuad",
          autoplay: false,
        });
        const onScroll = () => {
          animation.play();
        };
        window.addEventListener("scroll", onScroll);
        cleanup = () => window.removeEventListener("scroll", onScroll);
      }
    });
    return () => {
      if (cleanup) cleanup();
    };
  }, []);
  return null;
} 