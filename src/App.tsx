import { BrowserRouter } from "react-router";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Events from "./components/Events";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Intro />
      <main className="main">
        <Menu />
        <Events />
        <About />
      </main>
    </BrowserRouter>
  );
};

export default App;
