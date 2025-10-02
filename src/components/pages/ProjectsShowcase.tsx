import { useState, type JSX } from "react";
import Section from "../Section";
import vestBanner from "/vest/banner.webp";
import Button from "../Button";
import ShowcaseContainer from "../ShowcaseContainer";
// import ProjectVest from "../../routes/projects/about";
export default function Project() {
  const sectionStyles = "bg-linear-to-b from-black via-neutral-700 to-black from-0% via-50% to-100% relative";
  const buttonStyles =
    "cursor-pointer absolute px-4 py-2 active:bg-neutral-400/20 top-1/2 rounded -translate-y-1/2 h-full hover:shadow-2xl hover:bg-neutral-700/20 text-2xl font-bold";
  function clickHandler(direction: string) {
    const scrollbar = document.querySelector("#scrollableProjects");
    if (direction === "left") {
      scrollbar?.scrollBy({
        top: 0,
        left: -10,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      scrollbar?.scrollBy({
        top: 0,
        left: 10,
        behavior: "smooth",
      });
    } else return;
  }
  function scrollHandler(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    const el = e.target as HTMLDivElement;
    if (scrollableElementsWidth !== el.clientWidth) {
      setScrollableElementsWidth(el.clientWidth);
    }
    if (el.scrollLeft !== 0) {
      setIsScrollbarAtStart(false);
    } else {
      setIsScrollbarAtStart(true);
    }
    console.log(scrollableElementsWidth);
    console.log(Math.round(el.scrollLeft));
    console.log(el.scrollWidth);
    const currentOffset = scrollableElementsWidth + Math.round(el.scrollLeft);
    const margin = 10;
    if (el.scrollWidth >= currentOffset - margin && el.scrollWidth <= currentOffset + margin) {
      setIsScrollbarAtEnd(true);
    } else {
      setIsScrollbarAtEnd(false);
    }
  }
  function showFullProject(tsxFile: JSX.Element) {
    setCurrentProject(tsxFile);
  }
  const [isScrollbarAtStart, setIsScrollbarAtStart] = useState(true);
  const [isScrollbarAtEnd, setIsScrollbarAtEnd] = useState(false);
  const [scrollableElementsWidth, setScrollableElementsWidth] = useState(0);
  const [currentProject, setCurrentProject] = useState<JSX.Element | null>(null);
  return (
    <Section styling={sectionStyles}>
      <div className="relative" id="projects">
        {/* Left */}
        <button
          onClick={() => clickHandler("left")}
          className={`${buttonStyles} ${isScrollbarAtStart ? "hidden" : "left-0"}`}
          type="button"
        >
          &lt;
        </button>
        {/* Right */}
        <button
          onClick={() => clickHandler("right")}
          className={`${buttonStyles} ${isScrollbarAtEnd ? "hidden" : "right-0"}`}
          type="button"
        >
          &gt;
        </button>
        {currentProject}
        <div
          onScrollEnd={(e) => scrollHandler(e)}
          id="scrollableProjects"
          className="flex flex-row overflow-x-auto snap-mandatory snap-x pb-5"
        >
          <ShowcaseContainer
            header="The Gazeta Vest Project"
            subheader="From a little button to a big app"
            imgSrc={vestBanner}
          />

          <div className="flex flex-none flex-col gap-4 justify-center align-middle items-center w-full snap-center">
            <h1 className="text-3xl">Let's make a new one together</h1>
            <h2 className="text-lg text-neutral-400">Head to Contact page</h2>
            <Button styling={"hover:bg-stone-700"} to={"#contacts"}>
              Let's build together
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
