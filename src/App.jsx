import { BrowserRouter } from "react-router-dom";

import { m } from "framer-motion";
import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Preloader,
  Tech,
  Works,
} from "./components";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <div className='relative z-0 bg-primary '>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
