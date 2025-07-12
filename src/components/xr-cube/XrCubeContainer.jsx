import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import XrCube from './XrCube'

const CubeContainer = () => {
  return (
    <>
      <ARButton />
      <Canvas
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.xr.enabled = true;
        }}
        camera={{ position: [0, 0, 0] }}
      >
        <XR sessionInit={{ requiredFeatures: ['hit-test'] }}>
          <XrCube />
        </XR>
      </Canvas>
    </>
  )
}

export default CubeContainer
