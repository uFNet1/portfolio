import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      {/* <img width="300px" src="./head.jpg" alt="" /> */}
      <Home />
      <About />
      <Contacts />
    </>
  );
}

export default App;
