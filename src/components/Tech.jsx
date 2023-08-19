import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Tech = () => {
  return (
    <motion.div
      variants={slideIn("down", "twing", 0.2, 1)}
      className='py-10 rounded-lg flex flex-row flex-wrap justify-center gap-10 shadow-card bg-tertiary border border-black'
    >
      {technologies.map((tech, index) => (
        <div key={index} className='tooltip cursor-pointer'>
          <div className='w-28 h-28 rounded-full flex items-center justify-center bg-secondary shadow-card'>
            <img
              src={tech.icon}
              alt={tech.name}
              className='absolute w-20 h-auto m-auto'
            />
          </div>
          <span className='tooltiptext'>{tech.name}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech);
