import Phaser from "phaser";
import { IslandsMainScene } from "./scene/islands/IslandsMainScene";
import { FPSScene } from "./scene/map-first/FPSScene";
import { BootScene, WorldScene } from "./scene/map-first/TypeScene";

// import { MainScene, FPSScene } from "./scene";

// const game: Phaser.Game = new Phaser.Game({
//   width: 1024,
//   height: 768,
//   scene: [MainScene, FPSScene ],
//   physics: {
//       default: 'matter',
//       matter: {
//         gravity: {
//             x: 0,
//             y: 9.8
//         }
//       }
//   }
// });
// const ratio = Math.max(window.innerWidth / window.innerHeight, window.innerHeight / window.innerWidth)
// const DEFAULT_HEIGHT = 720 // any height you want
// const DEFAULT_WIDTH = ratio * DEFAULT_HEIGHT

const game: Phaser.Game = new Phaser.Game({
  type: Phaser.AUTO,
  
  // width: 1600,
  // height: 1000,
  scale: {
    mode: Phaser.Scale.RESIZE,
    // Center vertically and horizontally
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // width: DEFAULT_WIDTH,
    // height: DEFAULT_HEIGHT,
  },
  zoom: 1,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        x: 0,
        y: 0,
      },
    },
  },
  scene: [BootScene, WorldScene, FPSScene],
  // scene: [IslandsMainScene],
});

