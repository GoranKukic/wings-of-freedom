import React, { useEffect, useRef, useState } from "react";
import { Stage, Sprite, Container } from "@pixi/react";
import heroImage from "./assets/sprites/hero/frame-1.png";
import bgImage from "./assets/sprites/stageBackground/full-background.png";

const App = () => {
  const stageRef = useRef(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Postavljanje dimenzija pri prvom renderovanju
    updateDimensions();

    // Dodavanje osluškivanja promena dimenzija prozora
    window.addEventListener("resize", updateDimensions);

    // Čišćenje osluškivanja prilikom demontaže komponente
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []); // Pratite promene samo prilikom montiranja komponente

  return (
    <Stage
      ref={stageRef}
      width={windowDimensions.width}
      height={windowDimensions.height}
    >
      <Container>
        {/* Background */}
        <Sprite
          image={bgImage}
          width={windowDimensions.width}
          height={windowDimensions.height}
        />

        {/* Hero sprite */}
        <Sprite
          image={heroImage}
          x={windowDimensions.width / 2}
          y={windowDimensions.height / 2}
          width={100}
          height={70}
          anchor={{ x: 0.5, y: 0.5 }}
        />
      </Container>
    </Stage>
  );
};

export default App;
