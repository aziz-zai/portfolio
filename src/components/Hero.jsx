import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as hero_img from "../assets/hero_animation.json";
import { styles } from "../styles";
import TypeWriter from "../utils/typewriter";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: hero_img.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  const hats = [
    {
      suffix: [
        { text: "Aziz ", color: "white" },
        { text: "Zai", color: "#253CA2" },
      ],
    },
    {
      suffix: [
        { text: "a ", color: "white" },
        { text: "Developer", color: "#253CA2" },
      ],
    },
  ];
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} 
        pt-[120px] max-w-7xl flex mx-auto flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#253CA2]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>
        <div className=''>
          <div className='flex'>
            <h1 className={`${styles.sectionHeadText} text-white `}>Hi, Im&nbsp;</h1>
            <TypeWriter hats={hats} />
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications <br className='sm:block hidden' />
            of every kind.
          </p>
        </div>
      </div>
      <div
        className={`${styles.paddingX}  w-full absolute top-[300px] sm:top-[200px]  flex flex-shrink`}
      >
        <Lottie
          options={defaultOptions1}
          width={isMobile ? 300 : 650}
          height={isMobile ? 300 : 650}
        />
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
