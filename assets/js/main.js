var game, game_width=400, game_height=600;

game = new Phaser.Game(game_width, game_height, Phaser.CANVAS, 'phaser-example');

game.state.add('Menu', Menu);
game.state.add('Play', Play);
//game.state.add('Options', Options);
//game.state.add('Help', Help);
//game.state.add('Game_Over', Game_Over);

game.state.start('Menu');