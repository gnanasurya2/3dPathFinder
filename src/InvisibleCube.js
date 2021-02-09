import { Box } from "@react-three/drei";

const InvisibleCube = (props) => {
  return (
    <Box args={[1, 1, 1]} position={props.position}>
      <meshPhongMaterial
        attach="material"
        transparent
        opacity={0}
        color={props.color}
      />
    </Box>
  );
};

export default InvisibleCube;
