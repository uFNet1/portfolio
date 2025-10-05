import "./MainPage.css";
import About from "./About";
import Contacts from "./Contacts";
import Header from "../Header";
import Home from "./Home";
import ProjectsShowcase from "./ProjectsShowcase";
import { useEffect, useState } from "react";
import type { elementInfo, positionOnPage } from "../../types";
let positionData: null | elementInfo = null;
export default function MainPage() {
  const [currentPosition, setCurrentPosition] = useState<null | elementInfo>(null);
  const [currentScroll, setCurrentScroll] = useState<null | positionOnPage>(null);

  // const [offset, setOffset] = useState(0);
  useEffect(() => {
    calculatePagesSizes(window.scrollY);
  }, []);
  useEffect(() => {
    const onScroll = () => calculatePagesSizes(window.scrollY);
    window.removeEventListener("scrollend", onScroll);
    window.addEventListener("scrollend", onScroll, { passive: true });
    return () => window.removeEventListener("scrollend", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setTimeout(() => {
        continiousScrolling(window.scrollY);
        calculatePagesSizes(window.scrollY);
      }, 100);
    };
    // const onScroll = () => continiousScrolling(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // function clickHandler(direction: string) {
  //   const scrollbar = document.querySelector("#scrollableProjects");
  //   if (direction === "left") {
  //     scrollbar?.scrollBy({
  //       top: 0,
  //       left: -10,
  //       behavior: "smooth",
  //     });
  //   } else if (direction === "right") {
  //     scrollbar?.scrollBy({
  //       top: 0,
  //       left: 10,
  //       behavior: "smooth",
  //     });
  //   } else return;
  // }
  function calculatePagesSizes(scroll: number) {
    const page = document.querySelector("html") as HTMLElement;
    const fullHeight = page.scrollHeight;
    const elementHeight = self.innerHeight;
    const elementsCount = Math.round(fullHeight / elementHeight);
    const currentOffset = page.clientHeight + Math.round(scroll);
    const currentElement = Math.floor((currentOffset - elementHeight) / elementHeight);
    console.log(currentElement);
    positionData = {
      elements: elementsCount,
      currentElement: currentElement,
      currentElementY: Math.round(currentOffset),
      elementHeight: elementHeight,
    };
    setCurrentPosition(positionData);
  }
  // console.log(positionData);
  function continiousScrolling(scroll: number) {
    // return;
    const page = document.querySelector("html") as HTMLElement;
    const currentScrollOffset = page.clientHeight + Math.round(scroll);
    // console.log(currentPosition);
    // console.log(positionData);
    if (positionData) {
      // console.log(positionData.currentElement);

      const prevElement =
        positionData.currentElement > 0 ? positionData.currentElementY - positionData.elementHeight : 0;
      const nextElement =
        positionData.currentElement < positionData.elements - 1
          ? positionData.currentElementY + positionData.elementHeight
          : positionData.currentElementY;
      setCurrentScroll({ previousElement: prevElement, nextElement: nextElement, scrollValue: currentScrollOffset });
    }
  }
  // function scrollHandler(e: React.UIEvent<HTMLDivElement, UIEvent>) {
  //   const el = e.target as HTMLDivElement;
  //   if (el.scrollLeft !== 0) {
  //     setIsScrollbarAtStart(false);
  //   } else {
  //     setIsScrollbarAtStart(true);
  //   }
  //   const currentOffset = el.clientWidth + Math.round(el.scrollLeft);
  //   const margin = 10;
  //   if (el.scrollWidth >= currentOffset - margin && el.scrollWidth <= currentOffset + margin) {
  //     setIsScrollbarAtEnd(true);
  //   } else {
  //     setIsScrollbarAtEnd(false);
  //   }
  // }

  return (
    <>
      <Header position={currentPosition} scrollData={currentScroll} />
      <div id="scrollablePages">
        <Home />
        <ProjectsShowcase />
        <About />
        <Contacts />
      </div>
    </>
  );
}
