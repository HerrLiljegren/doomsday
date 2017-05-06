export default class Boot {
    constructor(game) {

    };

    preload() {
        console.log('Boot.preload');
        this.game.time.advancedTiming = true;
    }

    create() {
        console.log('Boot.create');

        this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }

        this.game.stage.backgroundColor = '#000';
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //have the game centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //screen size will be set automatically
        //this.scale.setScreenSize(true);

        //  We're going to be using physics, so enable the Arcade Physics system
        //this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //this.game.physics.startSystem(Phaser.Physics.P2JS)

        this.game.state.start('Preloader');
    }
};
