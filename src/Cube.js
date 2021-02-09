import { Box } from "@react-three/drei";

const Cube = (props) => {
  return (
    <Box args={[1, 1, 1]} position={[...props.position, 0.5]}>
      <meshPhongMaterial attach="material" color={props.color} />
    </Box>
  );
};

export default Cube;
