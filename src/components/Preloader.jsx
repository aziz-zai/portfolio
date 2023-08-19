import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";

import * as location from "../assets/loading.json";
import * as success from "../assets/success.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
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
      <div className=' w-full h-screen flex items-center justify-center'>
        {!loading ? (
          <Lottie options={defaultOptions2} height={100} width={100} />
        ) : (
          <Lottie options={defaultOptions1} height={200} width={200} />
        )}
      </div>
    </motion.div>
  );
};

export default Preloader;
