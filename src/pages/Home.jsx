import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import { IceKingHouse } from "../models/IceKingHouse";
import { OrbitControls } from "@react-three/drei";
import HomeInfo from "../components/HomeInfo";
import {LadyRanicorn} from "../models/LadyRanicorn.jsx";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  // Ajuste de IceKingHouse según tamaño de pantalla
  const adjustIceKingHomeForScrensize = () => {
    let screenScale;
    let screenPosition;


    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, 6.5, -150];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [12, 1, -180];
    }

    const rotation = [0, 0, 0]; // rotación interna del modelo ya aplicada
    return [screenScale, screenPosition, rotation];
  };

  const [iceKingScale, iceKingPosition, iceKingRotation] =
      adjustIceKingHomeForScrensize();

  return (
      <section className="w-full h-screen relative">
        <div
            className="absolute top-28 left-0 right-0 z-10
              flex items-center justify-center"
        >
          {<HomeInfo />}
        </div>

        <Canvas
            className={`w-full h-screen bg-transparent  ${
                isRotating ? "cursor-grabbing" : "cursor-grab"
            }`}
            camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <OrbitControls />

            <directionalLight position={[1, 1, 1]} intensity={4} />
            <ambientLight intensity={0.8} />
            <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
            />

            <Sky isRotating={isRotating} />
              <LadyRanicorn
                  position={[2, 0, 0]}   // la mueves a la derecha
                  scale={.4}
                  isRotating={isRotating}
              />
            <IceKingHouse
                position={iceKingPosition} // ✅ posición correcta
                scale={iceKingScale}       // ✅ escala correcta
                rotation={iceKingRotation} // rotación ya aplicada internamente
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
            />

          </Suspense>
        </Canvas>
      </section>
  );
};

export default Home;
