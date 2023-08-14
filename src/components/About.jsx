import { motion } from 'framer-motion';
import React from 'react';
import Tilt from 'react-tilt';

import { services } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
    </>
  )
}

export default About