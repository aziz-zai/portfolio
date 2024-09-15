import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Preloader,
} from "./components";
import Portfolio from "./pages/Portfolio";
import HigherLowerGame from "./pages/higherLowerGame";

const App = () => {
  return (
    <>
      <Preloader />
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Portfolio/>}/>
      <Route exact path="/higher-lower-game" element={<HigherLowerGame/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
