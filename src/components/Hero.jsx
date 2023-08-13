import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} 
      absolute inset-0 top-[120px] max-w-7xl flex mx-auto flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#596EF4]'/>
          <div className='w-1 sm:h-80 h-40 blue-gradient'/>
        </div>
          <div className=''>
            <h1 className={`${styles.heroHeadText} text-white`}> 
            Hi, Im <span className='text-[#596EF4]'> Aziz </span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop web applications <br className='sm:block hidden'/>of every kind.</p>
          </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero