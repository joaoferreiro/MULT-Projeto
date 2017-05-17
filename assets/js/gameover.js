var gameOverText, button1, button2;

var GameOver = {
	preload: function(){
		this.game.load.image('button', 'assets/images/button.png');
	},

	create: function(){

	this.game.stage.backgroundColor = "#FF0000";

	
	gameOverText = game.add.text(50, 50, 'YOU DIED !!!');

	gameOverText.align = 'center';
	gameOverText.font = 'Arial';
	gameOverText.fontSize = 50;
	gameOverText.fill = '#fff';

	button1 = this.add.button(75, 300, 'button', this.startGame, this);
	button1.width = 250; button1.height = 50;

	textButton1 = game.add.text(this.game.world.centerX, 328, 'Retry');
	textButton1.anchor.set(0.5);
	textButton1.align = 'center';
	textButton1.font = 'Arial';
	textButton1.fontSize = 25;
	textButton1.fill = '#000';


	button2 = this.add.button(75, 475, 'button', this.startMenu, this);
	button2.width = 250; button2.height = 50;

	textButton2 = game.add.text(this.game.world.centerX, 503, 'Menu');
	textButton2.anchor.set(0.5);
	textButton2.align = 'center';
	textButton2.font = 'Arial';
	textButton2.fontSize = 25;
	textButton2.fill = '#000';

	},

	startGame:function (){
		this.game.state.start('Play');
	},

	startMenu:function (){
		this.game.state.start('Menu');
	}
	
}