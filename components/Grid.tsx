"use client";

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { SectionReveal, StaggerItem } from "./ui/section-reveal";

const Grid = () => {
  return (
    <section id="about">
      <SectionReveal stagger staggerDelay={0.08}>
        <BentoGrid className="w-full py-16 sm:py-20">
          {gridItems.map(
            (
              {
                id,
                title,
                description,
                className,
                img,
                imgClassName,
                titleClassName,
                spareImg,
              },
              index,
            ) => {
              // Bento layout directional entry:
              // id 1 (left column): 'left'
              // id 2, 3 (right column upper): 'right'
              // id 4 (bottom left/middle): 'left'
              // id 5 (bottom right banner): 'right'
              // id 6 (copy email / bottom): 'up'
              const direction =
                id === 1 || id === 4
                  ? "left"
                  : id === 2 || id === 3 || id === 5
                  ? "right"
                  : "up";

              return (
                <StaggerItem
                  key={id}
                  direction={direction}
                  offset={16}
                  className={className}
                >
                  <BentoGridItem
                    id={id}
                    title={title}
                    description={description}
                    className="h-full w-full"
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                  />
                </StaggerItem>
              );
            },
          )}
        </BentoGrid>
      </SectionReveal>
    </section>
  );
};

export default Grid;
