
export interface MoveXY{
    moveX(x: number)
    moveY(y: number)
}

export class ModeUpdateHelper {

    constructor(private cursors: Phaser.Types.Input.Keyboard.CursorKeys, private movable: MoveXY, private speed: number) { }
    
    move(): boolean {
        if (this.cursors.left.isDown) {
             this.movable.moveX(-this.speed);
        } else if (this.cursors.right.isDown) {
            this.movable.moveX(this.speed);
        } else if (this.cursors.up.isDown) {
            this.movable.moveY(-this.speed);
        } else if (this.cursors.down.isDown) {
            this.movable.moveY(this.speed);
        } else {
            return false;
        }
        return true;
    }
}
