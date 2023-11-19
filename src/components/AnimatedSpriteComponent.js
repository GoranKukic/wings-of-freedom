// AnimatedSpriteComponent.js

import React, { useEffect, useState } from "react";
import { AnimatedSprite } from "@pixi/react";
import * as PIXI from "pixi.js";

import frameNew1 from "../assets/sprites/hero/frame-1.png";
import frameNew2 from "../assets/sprites/hero/frame-2.png";
import frameNew3 from "../assets/sprites/hero/frame-3.png";
import frameNew4 from "../assets/sprites/hero/frame-4.png";
import frameNew5 from "../assets/sprites/hero/frame-5.png";
import frameNew6 from "../assets/sprites/hero/frame-6.png";
import frameNew7 from "../assets/sprites/hero/frame-7.png";
import frameNew8 from "../assets/sprites/hero/frame-8.png";

const AnimatedSpriteComponent = ({ xPropPos, yPropPos }) => {
  const [textures, setTextures] = useState([]);

  useEffect(() => {
    const images = [
      frameNew1,
      frameNew2,
      frameNew3,
      frameNew4,
      frameNew5,
      frameNew6,
      frameNew7,
      frameNew8,
    ];

    const loadTextures = async () => {
      const loadedTextures = await Promise.all(
        images.map(
          (image) =>
            new Promise((resolve) =>
              PIXI.Texture.from(image).on("update", resolve)
            )
        )
      );
      setTextures(loadedTextures);
    };

    loadTextures();
  }, []);

  if (textures.length === 0) {
    // Textures are not loaded yet, return a loading indicator or null
    return null; // You can replace this with a loading indicator component if needed
  }

  return (
    <AnimatedSprite
      anchor={0.5}
      textures={textures}
      isPlaying={true}
      initialFrame={0}
      animationSpeed={0.1}
      width={100}
      height={70}
      x={xPropPos}
      y={yPropPos}
    />
  );
};

export default AnimatedSpriteComponent;

// AnimatedSpriteComponent.js

// import React, { useEffect, useState } from "react";
// import { AnimatedSprite } from "@pixi/react";
// import * as PIXI from "pixi.js";
// import HeroJSON from "../assets/sprites/hero/hero.json";
// import { useApp } from "@pixi/react";

// const AnimatedSpriteComponent = ({ xPropPos, yPropPos }) => {
//   const [frames, setFrames] = useState([]);
//   const pixiApp = useApp();

//   console.log("pixiApp: ", pixiApp);

//   const spritesheet = HeroJSON;

//   console.log(" spritesheet: ", spritesheet);

//   useEffect(() => {
//     const loadTextures = async () => {
//       const loadedFrames = [];

//       await new Promise((resolve) =>
//         pixiApp.loader.add(spritesheet).load((_, resource) => {
//           const frames = Object.keys(resource[spritesheet].data.frames).map(
//             (frame) => PIXI.Texture.from(frame)
//           );
//           loadedFrames.push(...frames);
//           resolve();
//         })
//       );

//       setFrames(loadedFrames);
//     };

//     loadTextures();
//   }, [pixiApp.loader, spritesheet, pixiApp]);

//   if (frames.length === 0) {
//     return null;
//   }
//   return (
//     <AnimatedSprite
//       anchor={0.5}
//       textures={frames}
//       isPlaying={true}
//       initialFrame={0}
//       animationSpeed={0.1}
//       width={100}
//       height={70}
//       x={xPropPos}
//       y={yPropPos}
//     />
//   );
// };

// export default AnimatedSpriteComponent;
