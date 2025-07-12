import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import XrCube from './XrCube'


const CubeContainer = () => {
  return (
    <>
    <ARButton/>
    <Canvas>
       <XR>
        <XrCube/>
      </XR>
    </Canvas>
  </>
  )
}

export default CubeContainer
