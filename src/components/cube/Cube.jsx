import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Cube = () => {
    const cubeRef = useRef();

useFrame((state, delta)=>{
    cubeRef.current.rotation.y += 0.02;
})

  return (
    <>
     <OrbitControls/>
      <ambientLight/>
       <pointLight position={[60, 60, 60]} />
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh> 
    </>
  )
}

export default Cube
