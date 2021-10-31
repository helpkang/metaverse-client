import Phaser from "phaser";
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

const game: Phaser.Game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 400,
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
});
