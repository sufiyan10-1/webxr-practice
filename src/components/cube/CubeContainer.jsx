import { Canvas } from '@react-three/fiber'
import Cube from './Cube'
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
