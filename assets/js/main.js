var game, game_width=400, game_height=300;

// Create a new game instance 600px wide and 450px tall:

game = new Phaser.Game(game_width, game_height, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);
game.state.add('Play', Play);
//game.state.add('Game_Over', Game_Over);

game.state.start('Menu');