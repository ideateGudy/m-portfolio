"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import MagicButton from "./magic-button";
import dynamic from "next/dynamic";
import { IoCopyOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { contactEmail } from "@/data";
import { motion } from "motion/react";

const GridGlobe = dynamic(() => import("./grid-globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 rounded-full border border-purple/20 bg-purple/5 animate-pulse" />
    </div>
  ),
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Node.js", "NestJS", "PostgreSQL", "Docker"];
  const rightLists = ["AWS", "Terraform", "CI/CD", "Next.js"];

  const [copied, setCopied] = useState<boolean>(false);
  const [confettiKey, setConfettiKey] = useState<number>(0);
  const [LottieComponent, setLottieComponent] = useState<any>(null);
  const [confettiData, setConfettiData] = useState<any>(null);

  const handleCopy = async () => {
    navigator.clipboard.writeText(contactEmail);

    if (!LottieComponent || !confettiData) {
      try {
        const [lottieModule, confettiModule] = await Promise.all([
          import("lottie-react"),
          import("@/data/confetti.json"),
        ]);
        const Component = (lottieModule as any).Lottie || (lottieModule as any).default || lottieModule;
        setLottieComponent(() => Component);
        setConfettiData((confettiModule as any).default || confettiModule);
      } catch (err) {
        console.error("Failed to load confetti animation", err);
      }
    }

    // Reset/remount the confetti animation every time
    setConfettiKey((prev) => prev + 1);
    setCopied(true);

    // Reset button state so it can be triggered again
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={cn(
        "relative group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-white/10 transition-colors duration-200 hover:border-purple/40 hover:shadow-xl dark:shadow-none overflow-hidden",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              loading="lazy"
              decoding="async"
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              loading="lazy"
              decoding="async"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          // add background animation ,
          <BackgroundGradientAnimation />
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-white-200 z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {copied && LottieComponent && confettiData && (
                  <LottieComponent
                    key={confettiKey}
                    src={confettiData}
                    loop={copied}
                    autoplay={copied}
                    style={{
                      width: 400,
                      height: 200,
                    }}
                  />
                )}
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
