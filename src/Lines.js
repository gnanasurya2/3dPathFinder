import { Line } from "@react-three/drei";
import { useMemo } from "react";

const Lines = (props) => {
  const points = useMemo(() => {
    const [x, y] = props.position;
    const points = [];
    let flag = 1;
    for (let i = -x / 2; i <= x / 2; i++) {
      points.push([i, (-flag * y) / 2, 0.1], [i, (flag * y) / 2, 0.1]);
      flag *= -1;
    }
    points.pop();
    flag = 1;
    for (let i = y / 2; i >= -y / 2; i--) {
      points.push([(flag * x) / 2, i, 0.1], [(-flag * x) / 2, i, 0.1]);
      flag *= -1;
    }
    return points;
  }, [props.position]);
  return <Line points={points} color="black" lineWidth={1} />;
};

export default Lines;
