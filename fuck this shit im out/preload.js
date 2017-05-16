var game, game_width=400, game_height=600;
var player, cursors, background, jumpTimer = 0;

game = new Phaser.Game(game_width, game_height, Phaser.CANVAS, '', { preload: preload });


function preload(){ 
    this.game.load.image('tile', 'tile.png'); 
    this.game.load.image('player', 'player.png');
    game.state.add('Play', Play);
	this.game.state.start("Play");

}
