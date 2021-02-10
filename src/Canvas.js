import { Suspense, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { Html, OrbitControls, Plane, Stats, useFBX } from "@react-three/drei";
import Cube from "./Cube";
import Text from "./Text";
import Lines from "./Lines";
import InvisibleCube from "./InvisibleCube";

import "./App.css";
const Canva = ({ size, ...props }) => {
  const [cubes, setCubes] = useState([]);
  const [gameState, setGameState] = useState(-1);
  const [destinationCube, setDestinationCube] = useState(null);
  const [startingCube, setStartingCube] = useState(null);
  const [command, setCommand] = useState("Select destination Grid");
  const [started, setStarted] = useState(false);
  const [sizeX, setSizeX] = useState(4);
  const [sizeY, setSizeY] = useState(4);

  const uniqueid = () => {
    var idstr = String.fromCharCode(Math.floor(Math.random() * 25 + 65));
    do {
      var ascicode = Math.floor(Math.random() * 42 + 48);
      if (ascicode < 58 || ascicode > 64) {
        idstr += String.fromCharCode(ascicode);
      }
    } while (idstr.length < 32);

    return idstr;
  };

  useEffect(() => {
    const endPointX = (sizeX - 1) / 2;
    const endPointY = (sizeY - 1) / 2;
    const newCubes = [];

    for (let i = -endPointX; i <= endPointX; i++) {
      for (let j = -endPointY; j <= endPointY; j++) {
        newCubes.push({
          position: [i, j],
          key: uniqueid(),
          color: "green",
          type: null,
          value: -1,
        });
      }
    }
    setCubes(newCubes);
  }, [sizeX, sizeY]);
  const indexFinder = (pos) =>
    cubes.findIndex(
      (cube) => (cube.position[0] == pos.x) & (cube.position[1] == pos.y)
    );
  const clickHandler = (event) => {
    event.stopPropagation();
    if (gameState == -1) return;
    const pos = event.intersections[0].object.position;
    const ele = indexFinder(pos);
    const newCubes = [...cubes];
    if (ele == -1) return;
    if (event.button === 0) {
      if (gameState === 1) {
        newCubes[ele].type = "obs";
      } else if ((gameState === 2) & (startingCube == null)) {
        newCubes[ele].type = "obs";
        newCubes[ele].color = "red";
        setStartingCube(ele);
      } else {
        if (destinationCube == null) {
          newCubes[ele].type = "des";
          newCubes[ele].value = 0;
          setDestinationCube(ele);
        }
      }
    } else {
      newCubes[ele].type = null;
      if ((gameState == 1) & (ele == destinationCube)) {
        newCubes[ele].type = "obs";
      }
      if ((gameState == 2) & (ele == startingCube)) {
        newCubes[ele].color = "green";
        newCubes[ele].value = -1;
        setStartingCube(null);
      }
      if (!gameState) {
        setDestinationCube(null);
      }
    }

    setCubes(() => newCubes);
  };
  const pathTracker = (index, min, pathFound) => {
    console.log(pathFound);
    if (pathFound) {
      console.log("path found");
      return;
    }
    if (index == destinationCube) {
      console.log("path found");
      return;
    }
    const newCubes = [...cubes];
    const pos = cubes[index].position;
    let minIndex = null;
    let final = pathFound;
    const neighbourhs = [
      indexFinder({ x: pos[0] - 1, y: pos[1] }),
      indexFinder({ x: pos[0] + 1, y: pos[1] }),
      indexFinder({ x: pos[0], y: pos[1] - 1 }),
      indexFinder({ x: pos[0], y: pos[1] + 1 }),
    ];
    neighbourhs.forEach((ele) => {
      if (ele == destinationCube) {
        console.log("des found");
        final = true;
      }
      if (ele != -1) {
        console.log(ele, newCubes[ele].value, min);
      }

      if (
        ele != -1 &&
        newCubes[ele].type == "text" &&
        newCubes[ele].value < min
      ) {
        min = newCubes[ele].value;
        minIndex = ele;
      }
    });
    if (minIndex != null) {
      newCubes[minIndex].type = "obs";
      newCubes[minIndex].color = "red";
      setCubes(() => newCubes);
      setTimeout(() => pathTracker(minIndex, min, final), 500);
    } else {
      console.log(index, destinationCube);
      if (final) {
        setCommand("Path found");
      } else {
        setCommand("Path not found");
      }
    }
  };
  useEffect(() => {
    if (cubes.length < 1) return;
    const index = cubes.findIndex((ele) => ele.type == null);
    if (index == -1 && started == false) {
      setStarted(true);
      console.log("oasjoias");
      setTimeout(() => {
        console.log("completed proximity");
        setCommand("Starting path tracker");
        pathTracker(startingCube, Number.MAX_SAFE_INTEGER, false);
      }, 2000);
    }
  }, [cubes]);
  const findProximity = (index) => {
    const newCubes = [...cubes];
    const pos = cubes[index].position,
      value = cubes[index].value;
    const neighbourhs = [
      indexFinder({ x: pos[0] - 1, y: pos[1] }),
      indexFinder({ x: pos[0] + 1, y: pos[1] }),
      indexFinder({ x: pos[0], y: pos[1] - 1 }),
      indexFinder({ x: pos[0], y: pos[1] + 1 }),
    ];
    neighbourhs.forEach((ele) => {
      if (
        ele != -1 &&
        newCubes[ele].type == null &&
        newCubes[ele].value == -1
      ) {
        newCubes[ele].value = value + 1;
        newCubes[ele].color = "red";
        newCubes[ele].type = "text";
        setTimeout(() => {
          setCubes(() => newCubes);
          findProximity(ele);
        }, 1000);
      }
    });
  };
  const changeState = () => {
    if (!gameState & (destinationCube != null)) {
      setGameState(1);
      setCommand("left click to add obstacles and right click to remove them");
    } else if (gameState == 1) {
      setCommand("Select the starting cube");
      setGameState(2);
    } else if (gameState == 2) {
      setCommand("finding proximity values");
      setGameState(3);
      findProximity(destinationCube);
    }
  };
  return (
    <div className="App">
      <div className="wrapper">
        {gameState == -1 ? (
          <>
            <h1 className="text">Select the grid Size</h1>
            <h1 className="text">X :</h1>
            <input
              type="number"
              min="1"
              max="10"
              value={sizeX}
              onChange={(event) => {
                const val = event.target.value;
                if (val > 10) {
                  setSizeX(20);
                } else {
                  setSizeX(val * 2);
                }
              }}
            />
            <h1 className="text">Y :</h1>
            <input
              type="number"
              min="1"
              max="10"
              value={sizeY}
              onChange={(event) => {
                const val = event.target.value;
                if (val > 10) {
                  setSizeY(20);
                } else {
                  setSizeY(val * 2);
                }
              }}
            />
            <button className="gameStateButton" onClick={() => setGameState(0)}>
              Continue
            </button>
          </>
        ) : (
          <>
            <h1 className="text">{command}</h1>
            <button onClick={changeState} className="gameStateButton">
              done
            </button>
          </>
        )}
      </div>
      <Stats />
      <Canvas
        shadowMap
        invalidateFrameloop
        camera={{ position: [0, 15, 15], far: 100 }}
        style={{ height: "calc(100vh - 50px)" }}
      >
        <Suspense fallback={null}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <Plane args={[sizeX, sizeY]} />
            <ambientLight intensity={1} />
            <spotLight intensity={2} position={[10, 10, 10]} />
            <group onPointerDown={clickHandler}>
              {cubes.map((cube) => {
                if (cube.type == null) {
                  return <InvisibleCube position={cube.position} />;
                } else if (cube.type == "des") {
                  return <Cube position={cube.position} color="hotpink" />;
                } else if (cube.type == "text") {
                  return (
                    <Text
                      position={cube.position}
                      children={"" + cube.value}
                      color={cube.color}
                    />
                  );
                } else {
                  return <Cube position={cube.position} color={cube.color} />;
                }
              })}
            </group>
            <Lines position={[sizeX, sizeY]} />
          </group>
          <OrbitControls
          // maxPolarAngle={Math.PI / 1.1}
          // minPolarAngle={Math.PI / 1.2}
          // minAzimuthAngle={Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Canva;
