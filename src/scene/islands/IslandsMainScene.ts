import perlin from "../../lib/perlin";
import { DrawHelper } from "./DrawHelper";
import { ImageLoaderHelper } from "./ImageLoaderHelper";
import { ModeUpdateHelper, MoveXY } from "./ModeUpdateHelper";

export const noise = perlin();

export class IslandsMainScene extends Phaser.Scene implements MoveXY {
  speed = 1;
  tilesize = 16;
  offsetX = 0;
  offsetY = 0;

  modeUpdateHelper: ModeUpdateHelper;
  drawHelper: DrawHelper;


  player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  preload() {
    this.imageLoad();
    this.createRandom();
  }

  create() {
    
    this.createMoveHelper();
    this.createDrawHelper();
    this.useDrawHelperDraw();
    
    this.makePlayer();

  
  }

  private makePlayer() {
    this.player = this.physics.add.sprite(this.cameras.default.width / 2, this.cameras.default.height / 2, "player", 6);
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [1, 7, 1, 13],
      }),
      frameRate: 10,
      repeat: -1,
    });

    // animation with key 'right'
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [1, 7, 1, 13],
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [2, 8, 2, 14],
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", {
        frames: [0, 6, 0, 12],
      }),
      frameRate: 10,
      repeat: -1,
    });

   
  }

  update() {
    if (this.moveAndGetMoveResult()) {
      this.useDrawHelperDraw();
    }
  }

  moveX(x: number) {
    this.offsetX += x;
  }

  moveY(y: number) {
    this.offsetY += y;
  }

  private moveAndGetMoveResult() {
    return this.modeUpdateHelper.move();
  }

  private imageLoad() {
    new ImageLoaderHelper(this).imageLoad();
  }

  private createRandom() {
    noise.seed(0.12345);
    //랜덤하게 생성 하려면 아래를 사용
    // noise.seed(Math.random());
  }

  private createDrawHelper() {
    this.drawHelper = new DrawHelper(this.tilesize, this);
  }

  private createMoveHelper() {
    this.modeUpdateHelper = new ModeUpdateHelper(
      this.input.keyboard.createCursorKeys(),
      this,
      this.speed
    );
  }

  private useDrawHelperDraw() {
    this.drawHelper.draw(this.offsetX, this.offsetY);
    this.player = this.physics.add.sprite(this.cameras.default.width / 2, this.cameras.default.height / 2, "player", 6);
    this.player.anims.play("right", true);
  }
}

export function between(value1, value2, value3) {
  return value2 < value1 && value1 < value3;
}
