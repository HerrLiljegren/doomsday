
export default class Hud extends Phaser.Group {
	constructor(game, player, waveManager) {
		super(game);

		this.game = game;
		this.player = player;
		this.waveManager = waveManager;

		this.infoFont = this.game.add.retroFont('ESPrade', 16, 16, Phaser.RetroFont.TEXT_SET1);
		this.infoImage = this.game.add.image(16, this.game.camera.height - 16, this.infoFont);
		this.infoImage.fixedToCamera = true;
		this.infoImage.anchor.setTo(0, 1);

		this.timerFont = this.game.add.retroFont('ESPrade', 16, 16, Phaser.RetroFont.TEXT_SET1);
		this.timerImage = this.game.add.image(this.game.camera.width - 16, 32, this.timerFont);
		this.timerImage.fixedToCamera = true;
		this.timerImage.anchor.setTo(1, 1);

		this.scoreFont = this.game.add.retroFont('ESPrade', 16, 16, Phaser.RetroFont.TEXT_SET1);
		this.scoreImage = this.game.add.image(16, 16, this.scoreFont);
		this.scoreImage.fixedToCamera = true;
		//this.scoreImage.anchor.setTo(1,1);
	}



	update() {
		this.timerFont.text = "Survival timer: " + this.game.elapsedTime;
		this.infoFont.text = "Health: " + this.player.health + "/" + this.player.maxHealth
			+ " Weapon: " + this.player.weapons[this.player.currentWeapon].weapon.name
			+ " Monsters Left: " + this.waveManager.monsterManager.monstersAlive;
		this.scoreFont.text = "Score: " + this.game.score;
	}
}
