import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      {/* <img width="300px" src="./head.jpg" alt="" /> */}
      <Home />
      <About />
    </>
  );
}

export default App;
