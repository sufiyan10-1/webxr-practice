import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import overlay from "../../assets/overlay.gif"

const Image = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef()
  const texture = useLoader(THREE.TextureLoader, overlay)

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[60, 60, 60]} />
      <mesh ref={meshRef} position={position}>
        <planeGeometry args={[0.5, 0.5]} />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>
    </>
  )
}

export default Image
