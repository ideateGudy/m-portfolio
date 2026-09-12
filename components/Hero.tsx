import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import MagicButton from "./ui/magic-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { resumeUrl } from "@/data";

const Hero = () => {
  return (
    <div className="pb-16 pt-24 md:pt-20 relative scroll-mt-0" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-white dark:bg-black-100 pointer-events-none">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,rgba(228,228,231,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.1)_1px,transparent_1px)]",
            "dark:bg-black-100",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>
      <div className="flex justify-center relative my-8 md:my-12 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-md">
            Architecting Robust Backends & Cloud Infrastructure
          </p>

          <TextGenerateEffect
            duration={3}
            filter={false}
            words="Engineering Scalable Systems from Backend to Modern Web"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl">
            Hi👋! I&apos;m Goodnews, a Fullstack Engineer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a href="#projects" className="w-full sm:w-auto">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                containerClassName="w-full sm:w-60"
              />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-12 w-full sm:w-60 overflow-hidden rounded-lg p-px focus:outline-none transition-transform active:scale-98"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-slate-900 transition-colors">
                <IoDocumentTextOutline className="text-purple text-lg" />
                View Resume
              </span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
