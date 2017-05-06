
export default class Preloader {
	constructor(game) { };


	preload() {
		console.log('Preloader.preload');

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		//this.game.physics.startSystem(Phaser.Physics.P2JS);

		this.game.input.keyboard.addKeyCapture([
			Phaser.Keyboard.LEFT,
			Phaser.Keyboard.RIGHT,
			Phaser.Keyboard.UP,
			Phaser.Keyboard.DOWN,
			Phaser.Keyboard.SPACEBAR
		]);

		this.game.load.image('ESPrade', 'assets/fonts/ESPrade (Cave).png');

		this.game.load.tilemap('level1', 'assets/maps/doomsday-level1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tiles', 'assets/maps/dungeon.png');

		this.game.load.image('soldier-torso', 'assets/soldier/soldier_torso_DW.png');
		this.game.load.spritesheet('soldier-legs', 'assets/soldier/soldier-legs.png', 64, 64, 4);
		this.game.load.image('soldier-legs-1', 'assets/soldier/soldier_legs_0001.png');
		this.game.load.image('soldier-legs-2', 'assets/soldier/soldier_legs_0002.png');
		this.game.load.image('soldier-legs-3', 'assets/soldier/soldier_legs_0003.png');
		this.game.load.image('soldier-legs-4', 'assets/soldier/soldier_legs_0004.png');
		this.game.load.image('bullet', 'assets/projectile2.png');

		this.game.load.image('doomsday', 'assets/doomsday.png');
		this.game.load.image('gameover', 'assets/gameover.png');
		this.game.load.image('press-space-to-play', 'assets/press-space-to-play.png');
		this.game.load.image('press-esc-to-restart', 'assets/press-esc-to-restart.png');
		this.game.load.image('wallpaper', 'assets/skull-782385_1280.png');
		this.game.load.image('gameover-wallpaper', 'assets/smoke-1232654_1280.png');

		this.game.load.atlas('soldier', 'assets/soldier.png', 'assets/soldier.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
		this.game.load.atlas('zombiearmy', 'assets/zombiearmy.png', 'assets/zombiearmy.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
		this.game.load.atlas('weapons', 'assets/weapons.png', 'assets/weapons.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
		this.game.load.atlas('blood', 'assets/blood.png', 'assets/blood.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
		this.game.load.atlas('gunflash', 'assets/gunflash.png', 'assets/gunflash.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);

		this.game.load.image('bullet', 'assets/bullet.png');

		var screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
		this.game.plugins.screenShake = screenShake;
	}

	create() {
		console.log('Preloader.create');
		this.game.state.start('Menu');
	}
}
