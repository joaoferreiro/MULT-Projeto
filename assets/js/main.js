var game, game_width=400, game_height=650;

game = new Phaser.Game(game_width, game_height, Phaser.CANVAS, 'phaser-example');

game.state.add('Menu', Menu);
game.state.add('Play', Play);
game.state.add('Help', Help);
game.state.add('About', About);
game.state.add('GameOver', GameOver);

game.state.start('Menu');