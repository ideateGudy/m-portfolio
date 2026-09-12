"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

export type TestimonialItem = {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
  roleTag?: string;
  rating?: number;
  highlight?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: TestimonialItem[];
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

    if (scrollerRef.current.dataset.duplicated === "true") return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    scrollerRef.current.dataset.duplicated = "true";

    const duration =
      speed === "fast" ? "28s" : speed === "normal" ? "55s" : "90s";

    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 md:gap-8 py-6",
          start &&
            (direction === "left"
              ? "animate-scroll-left"
              : "animate-scroll-right"),
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[85vw] sm:w-[480px] md:w-[560px] shrink-0 rounded-3xl border border-white/15 bg-black-200/70 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-purple/50 hover:shadow-[0_0_30px_rgba(203,172,249,0.12)] overflow-hidden group"
            key={idx}
          >
            {/* Top accent glow on hover */}
            <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-purple/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Header: Rating & Highlight Pill */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {item.highlight && (
                  <span className="text-[11px] font-medium font-mono px-3 py-1 rounded-full bg-purple/15 text-purple border border-purple/25">
                    {item.highlight}
                  </span>
                )}
              </div>

              {/* Quote icon & text */}
              <div className="relative">
                <FaQuoteLeft className="text-purple/20 text-3xl absolute -top-3 -left-1 pointer-events-none select-none" />
                <p className="relative z-10 text-sm sm:text-base leading-relaxed text-white-100 font-light pt-2">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Author Footer with Real Avatar */}
            <div className="relative z-10 mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple/40 shrink-0 bg-slate-900 shadow-md">
                  <img
                    src={item.avatar || "/profile.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                    {item.name}
                  </span>
                  <span className="text-xs text-white-200 font-light">
                    {item.title}
                  </span>
                </div>
              </div>

              {item.roleTag && (
                <span className="hidden sm:inline-block text-[11px] text-white-200/70 border border-white/10 px-2.5 py-1 rounded-md bg-white/5">
                  {item.roleTag}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
