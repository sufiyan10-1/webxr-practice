import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Cube from "./Cube";

const XrHitCube = () => {
  const reticleRef = useRef();
  const [cubePosition, setCubePosition] = useState(null);
  const [placed, setPlaced] = useState(false);

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix) => {
    if (reticleRef.current && !placed) {
      hitMatrix.decompose(
        reticleRef.current.position,
        reticleRef.current.quaternion,
        reticleRef.current.scale
      );
      reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    }
  });

  const placeCube = () => {
    if (!placed && reticleRef.current) {
      const position = reticleRef.current.position.clone();
      setCubePosition(position);
      setPlaced(true);
    }
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />

      {/* Only show cube if placed and in AR */}
      {isPresenting && cubePosition && <Cube position={cubePosition} />}

      {/* Reticle only visible before placement */}
      {isPresenting && !placed && (
        <Interactive onSelect={placeCube}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {/* Fallback cube in non-AR mode */}
      {!isPresenting && <Cube />}
    </>
  );
};

export default XrHitCube;
