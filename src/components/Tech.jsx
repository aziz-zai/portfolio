import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <h2 className='sm:text-[45px] xs:text-[35px] text-[25px] text-secondary uppercase tracking-wider text-center'>
        Tech Stack
      </h2>
      <div className='py-10 rounded-lg flex flex-row flex-wrap justify-center gap-12'>
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
      </div>
    </div>
  );
};

export default SectionWrapper(Tech);
