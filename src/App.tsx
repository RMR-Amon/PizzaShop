import { BrowserRouter } from "react-router";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Events from "./components/Events";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="home" id="home">
      <BrowserRouter>
        <Nav />
        <Intro />
        <main className="main">
          <Menu />
          <Events />
          <About />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
