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
  preload() {
    this.imageLoad();
    this.createRandom();
  }

  create() {
    this.createMoveHelper();
    this.createDrawHelper();
    this.useDrawHelperDraw();
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
  }
}

export function between(value1, value2, value3) {
  return value2 < value1 && value1 < value3;
}
