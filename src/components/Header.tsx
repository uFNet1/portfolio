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
      const margin = document.querySelector("#buttonsHeader")?.clientHeight;
      const step = position.elementHeight;
      const currPage = step * (position.currentElement + 1);
      const currScroll = margin ? scrollData.scrollValue - margin : scrollData.scrollValue;
      const percentage = currScroll > currPage ? (currScroll - currPage) / step : 0;
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

  const buttonStyles = "rounded-full px-3 py-1 backdrop-blur-2xl relative";
  const currentButtonStyles = `bg-linear-to-r from-blue-500 from-50% via-51% via-gray-500/0 to-gray-500/0 bg-[length:200%_100%]`;
  const nextButtonStyles = `bg-linear-to-r from-gray-500/0 from-50% via-51% via-blue-500 to-blue-500 bg-[length:200%_100%]`;
  const prevButtonStyles = `bg-linear-to-l to-blue-500 from-gray-500/0 bg-[length:200%_100%]`;

  function positionCalculate(i: number) {
    if (!blobPercentage || !position) return 0;
    const direction = checkDirection(blobPercentage);
    if (direction === "next") {
      if (i === position?.currentElement + 1) {
        return -Math.round(blobPercentage) + "%";
      } else if (i === position?.currentElement) return -Math.round(blobPercentage) + "%";
    } else if (direction === "previous") {
      if (i === position?.currentElement - 1) {
        return -Math.round(blobPercentage) + "%";
      } else if (i === position?.currentElement) return -Math.round(blobPercentage) + "%";
    }
    if (i === position?.currentElement + 1) return Math.round(blobPercentage);
  }
  return (
    <header
      id="buttonsHeader"
      className="w-fit flex flex-row justify-center gap-4 max-md:mx-auto text-base md:text-2xl font-light md:right-36 top-10 sticky md:float-right items-center z-50"
    >
      {buttons.map((e, i) => (
        <a
          key={i}
          href={e.link}
          style={{ backgroundPositionX: positionCalculate(i) }}
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
          }`}
        >
          {e.text}
        </a>
      ))}
    </header>
  );
}
