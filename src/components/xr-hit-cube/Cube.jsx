import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import overlayImage from "../../assets/overlay.gif"; // adjust path if needed

const Cube = ({ position }) => {
  const planeRef = useRef();

  const texture = useLoader(THREE.TextureLoader, overlayImage);

  return (
    <mesh ref={planeRef} position={position}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

export default Cube;
