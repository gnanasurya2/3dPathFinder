import { useFBX } from "@react-three/drei";
import InvisibleCube from "./InvisibleCube";
import Cube from "./Cube";
const DestinationCup = (props) => {
  const fbx = useFBX("/WinnerCup.fbx");
  return (
    <group>
      <InvisibleCube position={[...props.position, 0.5]} color="green" />
      <primitive
        object={fbx}
        dispose={null}
        scale={[0.002, 0.002, 0.002]}
        position={[...props.position, 0.5]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};
export default DestinationCup;
