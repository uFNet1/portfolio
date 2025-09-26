import "./App.css";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import ProjectsShowcase from "./components/pages/ProjectsShowcase";

function App() {
  return (
    <>
      <Header />
      {/* <img width="300px" src="./head.jpg" alt="" /> */}
      <Home />
      <ProjectsShowcase />
      <About />
      <Contacts />
    </>
  );
}

export default App;
