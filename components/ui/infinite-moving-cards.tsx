"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Prevent duplicating the cards more than once
    if (scrollerRef.current.dataset.duplicated === "true") return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    scrollerRef.current.dataset.duplicated = "true";

    // Direction
    // containerRef.current.style.setProperty(
    //   "--animation-direction",
    //   direction === "left" ? "forwards" : "reverse",
    // );

    // Speed
    const duration =
      speed === "fast" ? "30s" : speed === "normal" ? "60s" : "100s";

    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
          start &&
            (direction === "left"
              ? "animate-scroll-left"
              : "animate-scroll-right"),
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[90vw] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-800 bg-[#04071d] bg-[linear-gradient(90deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)] p-5 md:w-[60vw] md:p-16"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />

              <span className="relative z-20 text-lg leading-[1.6] font-normal text-white dark:text-gray-100">
                {item.quote}
              </span>

              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img src="/profile.svg" alt="profile" />
                </div>

                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-bold text-white">
                    {item.name}
                  </span>

                  <span className="text-sm leading-[1.6] font-normal text-white-200">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
