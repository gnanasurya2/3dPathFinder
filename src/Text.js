import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import { useMemo } from "react";
import { Box } from "@react-three/drei";

const Text = ({ children, color = "#fff", position, ...props }) => {
  const font = useLoader(THREE.FontLoader, "/font.json");
  const config = useMemo(
    () => ({
      font,
      size: 5,
      height: 1.5,
    }),
    [font]
  );
  return (
    <>
      <Box args={[1, 1, 1]} position={[position[0], position[1], 0.5]}>
        <meshPhongMaterial
          attach="material"
          opacity={0}
          transparent
          color="green"
        />
      </Box>
      <group position={[position[0], position[1], 0]} scale={[0.1, 0.1, 0.1]}>
        <mesh position={children > 9 ? [-4, -2, 0] : [-2, -3, 0]}>
          <textBufferGeometry args={[children, config]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>
    </>
  );
};

export default Text;
