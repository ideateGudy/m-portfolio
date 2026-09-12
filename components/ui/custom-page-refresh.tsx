"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { FaArrowUp } from "react-icons/fa6";

export const CustomPageRefresh = () => {
  // 1. Continuous Scroll Progress Bar at the top of the screen
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 2. Floating Back to Top Button at bottom right
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 3. Mobile pull-to-refresh state
  const [pullDistance, setPullDistance] = useState(0);
  const [isPulling, setIsPulling] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startYRef = useRef(0);

  // Scroll listener for floating Back-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger mobile refresh
  const triggerRefresh = () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 650);
  };

  // Mobile pull down detection
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY <= 2) {
        startYRef.current = e.touches[0].clientY;
        setIsPulling(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling || isRefreshing) return;
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startYRef.current;

      if (deltaY > 0 && window.scrollY <= 2) {
        const damped = Math.min(deltaY * 0.45, 90);
        setPullDistance(damped);
      } else {
        setPullDistance(0);
      }
    };

    const handleTouchEnd = () => {
      if (!isPulling) return;
      setIsPulling(false);

      if (pullDistance > 60 && !isRefreshing) {
        setPullDistance(65);
        triggerRefresh();
      } else {
        setPullDistance(0);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isPulling, pullDistance, isRefreshing]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 1. HORIZONTAL SCROLL PROGRESS BAR AT TOP OF SCREEN */}
      <div className="fixed top-0 inset-x-0 z-9999 h-[3.5px] bg-black/30 pointer-events-none">
        <motion.div
          className="h-full origin-left bg-linear-to-r from-purple via-[#9c82f7] to-[#e4cbff] shadow-[0_0_12px_rgba(203,172,249,0.9)]"
          style={{ scaleX }}
        />
      </div>

      {/* 2. MOBILE PULL TO REFRESH PILL */}
      <AnimatePresence>
        {(pullDistance > 10 || isRefreshing) && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{
              opacity: 1,
              y: isRefreshing ? 28 : Math.max(pullDistance - 10, 10),
            }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed top-2 inset-x-0 z-9990 flex justify-center pointer-events-none"
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple/40 bg-black-100/90 backdrop-blur-xl shadow-[0_0_25px_rgba(203,172,249,0.25)] text-white">
              <span className={`w-2 h-2 rounded-full bg-purple ${isRefreshing || pullDistance > 60 ? "animate-ping" : ""}`} />
              <span className="text-xs font-mono font-medium text-white-100">
                {isRefreshing
                  ? "Reloading portfolio..."
                  : pullDistance > 60
                  ? "Release to refresh"
                  : "Pull down to refresh"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. FLOATING BACK TO TOP BUTTON AT BOTTOM RIGHT (Elevated to clear 'Report a Bug' widget) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 sm:bottom-24 right-6 z-40"
          >
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="w-11 h-11 rounded-full border border-purple/40 bg-black-200/90 hover:bg-purple/20 backdrop-blur-xl flex items-center justify-center text-purple hover:text-white hover:border-purple/80 shadow-[0_0_20px_rgba(203,172,249,0.3)] transition-all duration-200 active:scale-90 cursor-pointer group"
            >
              <FaArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
