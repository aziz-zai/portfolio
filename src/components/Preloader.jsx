import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

import loadingAnimation from "../assets/loading.json";
import successAnimation from "../assets/success.json";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setComplete(true);
      }, 1200);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!complete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [complete]);

  return (
    <motion.div
      initial={{ translateY: 0 }}
      animate={{ translateY: "-100%", transition: { duration: 1, delay: 2 } }}
      className='absolute top-0 left-0 w-full h-screen bg-primary z-50 overflow-hidden'
      style={{ overflow: "hidden" }}
    >
      <div className='w-full h-screen flex items-center justify-center'>
        {!loading ? (
          <Lottie
            animationData={successAnimation}
            loop={true}
            autoplay={true}
            style={{ height: 100, width: 100 }}
          />
        ) : (
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            autoplay={true}
            style={{ height: 200, width: 200 }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Preloader;
