import { noise, between } from "./IslandsMainScene";

export class DrawHelper {
    constructor(private tilesize: number, private scene: Phaser.Scene) { }

    draw(offsetX: number, offsetY: number) {
        (this.scene.add as any).displayList.removeAll();
        const { scene } = this;

        const { width, height } = scene.cameras.default;
        for (let y = 0; y < height / this.tilesize; y++) {
            const posY = y * this.tilesize + 8;
            const offsetY_Y = (y + offsetY) / 20;
            for (let x = 0; x < width / this.tilesize; x++) {
                const posX = x * this.tilesize + 8;

                let value = noise.simplex2((x + offsetX) / 20, offsetY_Y);
                if (between(value, -1, 1)) {
                    scene.add.image(posX, posY, "Grass"); //.setAlpha(Math.abs(value + 1.5));
                } else if (between(value, 1, 1.3)) {
                    scene.add.image(posX, posY, "Sand");
                } else {
                    scene.add.image(posX, posY, "Sea"); //.setAlpha(Math.abs(1 - (value / 2)));
                }

                if (between(value, 0.2, 0.201)) {
                    scene.add.image(posX, posY, "Boat1");
                } else if (between(value, 0.201, 0.2015)) {
                    scene.add.image(posX, posY, "Boat2");
                } else if (between(value, -1, -0.65)) {
                    const value2 = parseInt(value.toString().slice(-1));
                    if (value2 > 6) {
                        scene.add.image(posX, posY, "Tree1");
                    } else if (value2 > 3) {
                        scene.add.image(posX, posY, "Tree2");
                    } else {
                        scene.add.image(posX, posY, "Tree3");
                    }
                }
            }
        }
    }
}
