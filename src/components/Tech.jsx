import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech, index) => (
        <div className='w-28 h-28 tooltip' key={index}>
          <BallCanvas icon={tech.icon} />
          <span className='tooltiptext'>{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
