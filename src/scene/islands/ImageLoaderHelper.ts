

export class ImageLoaderHelper {
    constructor(private scene: Phaser.Scene) { }

    imageLoad() {
        const base = "assets/image/kaleidawave.github.io/islands/";
        this.scene.load.image("Grass", base + "Grass.png");
        this.scene.load.image("Tree1", base + "Tree1.png");
        this.scene.load.image("Tree2", base + "Tree2.png");
        this.scene.load.image("Tree3", base + "Tree3.png");
        this.scene.load.image("Sea", base + "Sea.png");
        this.scene.load.image("Boat1", base + "Boat1.png");
        this.scene.load.image("Boat2", base + "Boat2.png");
        this.scene.load.image("Sand", base + "Sand.png");
        // our two characters
        this.scene.load.spritesheet("player", "/assets/image/RPG_assets.png", {
            frameWidth: 16,
            frameHeight: 16,
        });
    }
}
