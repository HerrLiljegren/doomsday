import { Pistol, SMG } from './weapons/Weapons';

export default class Player extends Phaser.Group {
	constructor(game, parent) {
		super(game, parent, 'Player', false, true, Phaser.Physics.ARCADE)
		this.game = game;

		this.enableBody = true;
		this.physicsBodyType = Phaser.Physics.ARCADE;

		var startX = this.game.world.centerX;
		var startY = this.game.world.centerY;
		this.legs = new Phaser.Sprite(this.game, startX, startY, 'soldier', 'soldier_legs_0001.png');
		this.torso = new Phaser.Sprite(this.game, startX, startY, 'soldier', 'soldier_torso_1h.png');

		this.add(this.legs);
		this.add(this.torso);
		this.corpse = this.game.add.sprite(0, 0, 'zombiearmy', '');
		this.corpse.animations.add('splat', Phaser.Animation.generateFrameNames('splatter_1/splatter_1_000', 1, 7, '.png'))
		this.corpse.visible = false;
		this.corpse.anchor.set(0.5);
		this.corpse.scale.set(2);
		this.corpse.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

		//this.game.physics.arcade.enable(this.torso);
		this.torso.anchor.set(0.5);
		this.torso.body.checkWorldBounds = true;
		this.legs.anchor.set(0.5);
		this.legs.animations.add('walk', Phaser.Animation.generateFrameNames('soldier_legs_000', 1, 4, '.png'));

		this.game.camera.follow(this.torso);
		this.speed = 350;
		this.health = 100;
		this.maxHealth = this.health;

		this.weapons = [];
		this.currentWeapon = 0;
		this.weaponName = null;

		this.weapons.push(new Pistol(this.game, this));
		this.weapons.push(new SMG(this.game, this));

		this.currentWeapon = 0;
		for (var i = 1; i < this.weapons.length; i++) {
			this.weapons[i].visible = false;
		}

		this.onDeath = new Phaser.Signal();

	};



	update() {

		this.legs.x = this.torso.x;
		this.legs.y = this.torso.y;
		this.legs.moves = false;

		// this.game.debug.body(this.legs);
		// this.game.debug.body(this.torso);

		// this.game.debug.bodyInfo(this.legs, 500, 132);
		// this.game.debug.spriteBounds(this.torso, 500, 232);
	}

	fire = function () {
		if (!this.alive) return;
		this.weapons[this.currentWeapon].fire(this.torso, this.torso.angle);
	}

	selectWeapon = function (index) {
		this.weapons[this.currentWeapon].weapon.visible = false;
		this.weapons[this.currentWeapon].bullets.visible = false;
		this.weapons[this.currentWeapon].bullets.callAll('reset', null, 0, 0);
		this.weapons[this.currentWeapon].bullets.setAll('exists', false);

		this.currentWeapon = index;
		if (this.currentWeapon < 0 || this.currentWeapon >= this.weapons.length) {
			this.currentWeapon = 0;
		}
		this.weapons[this.currentWeapon].weapon.visible = true;
		this.weapons[this.currentWeapon].bullets.visible = true;
		console.log(this.weapons[this.currentWeapon].weapon.name);
	}

	damage = function (amount) {
		if (this.alive) {
			this.health -= amount;

			if (this.health <= 0) {
				this.health = 0;
				this.die();
			}
		}

		return this;
	}

	die = function () {
		this.callAll('kill');
		this.alive = false;

		this.corpse.visible = true;
		this.corpse.x = this.torso.x
		this.corpse.y = this.torso.y
		this.corpse.animations.play('splat', 14, false);
		this.onDeath.dispatch(this);
	}
}
