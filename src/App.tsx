import { BrowserRouter, Route, Routes } from "react-router";
import HomeLayout from "./Layout/HomeLayout";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
