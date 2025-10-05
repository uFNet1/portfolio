import { useEffect, useState } from "react";
import type { elementInfo, positionOnPage } from "../types";

export default function Header({
  position,
  scrollData,
}: {
  position: elementInfo | null;
  scrollData: positionOnPage | null;
}) {
  const buttons = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "Projects",
      link: "#projects",
    },
    {
      text: "About me",
      link: "#about",
    },
    {
      text: "Contacts",
      link: "#contacts",
    },
  ];
  function calculateRelativePercentage() {
    if (position && scrollData) {
      const currPage = position.currentElementY;
      const currScroll = scrollData.scrollValue;
      const step = position.elementHeight;
      const percentage = (currScroll - currPage) / step;
      return percentage * 100;
    }
  }
  function checkDirection(percentage: number | undefined) {
    if (!percentage) return "none";
    if (percentage > 0) {
      return "next";
    } else if (percentage < 0) {
      return "previous";
    } else {
      return "none";
    }
  }
  const blobPercentage = calculateRelativePercentage();
  useEffect(() => {
    // calculateRelativePercentage();
  }, [scrollData]);
  // const [blobPercentage, setBlobPercentage] = useState<number>(0);
  const buttonStyles = "rounded-full px-3 py-1 backdrop-blur-2xl relative";
  const selectedButtonStyles = `bg-linear-to-tr from-cyan-600/50 to-blue-500/60`;

  // const currentButtonStyles = `bg-linear-to-r from-gray-500/0 to-blue-500 bg-[length:200%_100%] bg-position-[${
  //   blobPercentage ? 100 / blobPercentage : null
  // }%]`;
  const currentButtonStyles = `bg-linear-to-r from-blue-500 from-50% via-51% via-gray-500/0 to-gray-500/0 bg-[length:200%_100%]`;
  // const currentButtonStyles = `bg-linear-to-r from-blue-500 to-gray-500/0 bg-[length:200%_100%] bg-position-[-64%_0%]`;
  const nextButtonStyles = `bg-linear-to-r to-blue-500 from-50% via-51% via-gray-500/0 from-gray-500/0 bg-[length:100%_100%] bg-position-[${
    blobPercentage ? blobPercentage : null
  }%]`;
  const prevButtonStyles = `bg-linear-to-l to-blue-500 from-gray-500/0 bg-[length:200%_100%]`;
  // const nextButtonStyles = `bg-linear-to-r from-blue-500 to-gray-500/0 bg-[length:200%_100%] bg-position-[1%]`;
  // const nextButtonStyles = `bg-red-500`;
  console.log(Math.round(blobPercentage));
  return (
    <header className="w-fit flex flex-row justify-center gap-4 max-md:mx-auto text-base md:text-2xl font-light md:right-36 top-10 sticky md:float-right items-center z-50">
      {buttons.map((e, i) => (
        <a
          key={i}
          href={e.link}
          style={{ backgroundPositionX: blobPercentage ? -Math.round(blobPercentage) + "%" : 0 }}
          className={`${buttonStyles} ${
            position !== null ? (position.currentElement === i ? currentButtonStyles : null) : null
          }
          ${
            position
              ? checkDirection(blobPercentage) === "next"
                ? i === position?.currentElement + 1
                  ? nextButtonStyles
                  : null
                : checkDirection(blobPercentage) === "previous" && i === position?.currentElement - 1
                ? prevButtonStyles
                : null
              : null
            // blobPercentage
            //   ? blobPercentage > 0
            //     ? i === position?.currentElement + 1
            //       ? nextButtonStyles
            //       : null
            //     : null
            //   : i === position?.currentElement - 1
            //   ? nextButtonStyles
            //   : null
          }`}
        >
          {e.text}
        </a>
      ))}
    </header>
  );
}
