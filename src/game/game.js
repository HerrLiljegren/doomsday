import Boot from './states/Boot';
import Main from './states/Game';
import GameOver from './states/GameOver';
import Menu from './states/MainMenu';
import Preloader from './states/Preloader';

/* global Doomsday: true, Phaser: true */
'use strict';

(function() {
    var game = new Phaser.Game(1280, 720, Phaser.AUTO, '');
    game.state.add('Boot', Boot);
    game.state.add('Preloader', Preloader);
    game.state.add('Menu', Menu);
    game.state.add('Game', Main);
    game.state.add('GameOver', GameOver);
    //game.state.add('GameOver', Doomsday.GameOver);
    game.state.start('Boot');
})();
