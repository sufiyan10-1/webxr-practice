import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Cube from './cube'
import Image from './image'

const CubeContainer = () => {
  return (
    <Canvas>
      {/* <Image/> */}
      <Cube/>
    </Canvas>
  )
}

export default CubeContainer
