import { motion } from "framer-motion";
import { hero_img } from "../assets";
import { styles } from "../styles";
import TypeWriter from "../utils/typewriter";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
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
      <div className={`${styles.paddingX}  w-full absolute top-[300px]`}>
        <img src={hero_img} alt='hero img' className='w-auto h-full mx-auto' />
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
