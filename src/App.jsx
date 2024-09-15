import { BrowserRouter } from "react-router-dom";
import {
  Preloader,
} from "./components";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <>
      <Preloader />
      <BrowserRouter>
      <Portfolio/>
      </BrowserRouter>
    </>
  );
};

export default App;
