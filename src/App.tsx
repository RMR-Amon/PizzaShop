import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Events from "./components/Events";
import About from "./components/About";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Authentication from "./pages/Authentication";
import Basket from "./pages/Basket";

const App = () => {
  return (
    <div className="home" id="home">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Intro />
                <main className="main">
                  <Menu />
                  <Events />
                  <About />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Authentication />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
