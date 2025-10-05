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
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function calculatePagesSizes(scroll: number) {
    const page = document.querySelector("html") as HTMLElement;
    const fullHeight = page.scrollHeight;
    const elementHeight = self.innerHeight;
    const elementsCount = Math.round(fullHeight / elementHeight);
    const currentOffset = page.clientHeight + scroll;
    const currentElement = Math.floor((currentOffset - elementHeight) / elementHeight);
    positionData = {
      elements: elementsCount,
      currentElement: currentElement,
      currentElementY: Math.round(currentOffset),
      elementHeight: elementHeight,
    };
    setCurrentPosition(positionData);
  }
  function continiousScrolling(scroll: number) {
    const page = document.querySelector("html") as HTMLElement;
    const currentScrollOffset = page.clientHeight + Math.round(scroll);
    if (positionData) {
      const prevElement =
        positionData.currentElement > 0 ? positionData.currentElementY - positionData.elementHeight : 0;
      const nextElement =
        positionData.currentElement < positionData.elements - 1
          ? positionData.currentElementY + positionData.elementHeight
          : positionData.currentElementY;
      setCurrentScroll({ previousElement: prevElement, nextElement: nextElement, scrollValue: currentScrollOffset });
    }
  }
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
