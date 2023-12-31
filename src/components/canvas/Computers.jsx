import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import CanvasLoader from "../Loader";
const Computers = ({ isMobile, rotationSpeed }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useFrame(() => {
    // Rotate the group around the Y-axis
  });
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight position={[-40, 10, 10]} angle={0.12} penumbra={1} intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1.25}
        position={isMobile ? [-1, -3, 1.5] : [1, -4, 1]}
        rotation={isMobile ? [0.01, -0.1, -0.01] : [0.015, -0.1, -0.015]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.005);

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
  const handleMouseEnter = () => {
    setRotationSpeed(0); // Stop rotation when mouse enters
  };

  const handleMouseLeave = () => {
    setRotationSpeed(0.005); // Restart rotation when mouse leaves
  };

  return (
    <Canvas
      frameloop='always'
      shadows
      camera={{ position: [30, 6, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} rotationSpeed={rotationSpeed} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
