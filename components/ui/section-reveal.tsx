"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "motion/react";
import { cn } from "@/lib/utils";

export type AnimationDirection = "up" | "down" | "left" | "right" | "none";

interface SectionRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
  offset?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay = 0.12) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

export const createDirectionVariants = (
  direction: AnimationDirection = "up",
  distance: number = 18
): Variants => {
  let initialX = 0;
  let initialY = 0;

  switch (direction) {
    case "left":
      initialX = -distance;
      break;
    case "right":
      initialX = distance;
      break;
    case "down":
      initialY = -distance;
      break;
    case "up":
      initialY = distance;
      break;
    case "none":
      break;
  }

  return {
    hidden: { opacity: 0, x: initialX, y: initialY },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1], // ultra-smooth spring-like cubic-bezier easeOut
      },
    },
  };
};

export const itemVariants: Variants = createDirectionVariants("up", 16);

export const SectionReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  offset = 16,
  stagger = false,
  staggerDelay = 0.1,
  ...props
}: SectionRevealProps) => {
  const variants = createDirectionVariants(direction, offset);

  if (stagger) {
    return (
      <motion.div
        variants={containerVariants}
        custom={staggerDelay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.02, margin: "0px 0px 80px 0px" }}
        className={cn("w-full will-change-transform", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.02, margin: "0px 0px 80px 0px" }}
      className={cn("w-full will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  direction?: AnimationDirection;
  offset?: number;
}

export const StaggerItem = ({
  children,
  className,
  direction = "up",
  offset = 16,
  variants,
  ...props
}: StaggerItemProps) => {
  const computedVariants = variants ?? createDirectionVariants(direction, offset);

  return (
    <motion.div
      variants={computedVariants}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
