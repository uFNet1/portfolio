import "./MainPage.css";
import About from "./About";
import Contacts from "./Contacts";
import Header from "../Header";
import Home from "./Home";
import ProjectsShowcase from "./ProjectsShowcase";

export default function MainPage() {
  return (
    <>
      <Header />
      <Home />
      <ProjectsShowcase />
      <About />
      <Contacts />
    </>
  );
}
