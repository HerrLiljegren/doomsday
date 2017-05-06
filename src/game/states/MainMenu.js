export default class Menu {
    constructor(game) { };

    preload() { }

    create() {

        this.wallpaper = this.game.add.sprite(0, 0, 'wallpaper');

        this.logo = this.game.add.sprite(this.camera.width / 2, (this.camera.height / 2) - 150, 'doomsday');
        this.logo.anchor.set(0.5);


        this.spaceToPlay = this.game.add.retroFont('ESPrade', 16, 16, Phaser.RetroFont.TEXT_SET1, 95, 0, 0, 0, 16);
        this.spaceToPlayImage = this.game.add.image(this.logo.x, this.camera.height - 150, this.spaceToPlay);
        this.spaceToPlayImage.anchor.set(0.5);
        this.game.add.tween(this.spaceToPlayImage).to({ alpha: 0.1 }, 1000, "Linear", true, 0, -1, true);

        this.camera.reset();
        //this.game.playerName = "jesper"
        //this.game.state.start('Game');
        // this.game.state.start('GameOver');

        var style = { font: "bold 12px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.version = this.game.add.text(100, 200, "0.2.0", style);
        this.version.anchor.set(0, 0);
        this.version.position.set(this.camera.width - this.version.width - 4, this.camera.height - this.version.height);

    }

    update() {
        this.spaceToPlay.text = "PRESS SPACE TO PLAY"

        if (!this.game.playerName)
            this.game.playerName = prompt('Namn');

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.game.state.start('Game');
        }


    }

    render() {
    }
}
