import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import CanvasLoader from '../Loader';
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight postition={[-20, 50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>
      <primitive object={computer.scene}
      scale={0.45}
      position={[0, -2.5, -.2]}
      rotation={[.62, 1.14, -.5]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  return(
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position:[26,3,5], fov:30}}
    gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas