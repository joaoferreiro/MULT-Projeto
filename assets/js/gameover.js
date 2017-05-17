var gameOverText, button1, button2;

var GameOver = {
	preload: function(){
		this.game.load.image('button', 'assets/images/button.png');
	},

	create: function(){
		this.game.stage.backgroundColor = "#FF0000";
		
		this.gameOverText = game.add.text(50, 50, 'YOU DIED !!!');

		this.gameOverText.align = 'center';
		this.gameOverText.font = 'Arial';
		this.gameOverText.fontSize = 50;
		this.gameOverText.fill = '#fff';

		this.button1 = this.add.button(75, 300, 'button', this.startGame, this);
		this.button1.width = 250; this.button1.height = 50;

		this.textButton1 = game.add.text(this.game.world.centerX, 328, 'Retry');
		this.textButton1.anchor.set(0.5);
		this.textButton1.align = 'center';
		this.textButton1.font = 'Arial';
		this.textButton1.fontSize = 25;
		this.textButton1.fill = '#000';

		this.button2 = this.add.button(75, 475, 'button', this.startMenu, this);
		this.button2.width = 250; this.button2.height = 50;

		this.textButton2 = game.add.text(this.game.world.centerX, 503, 'Menu');
		this.textButton2.anchor.set(0.5);
		this.textButton2.align = 'center';
		this.textButton2.font = 'Arial';
		this.textButton2.fontSize = 25;
		this.textButton2.fill = '#000';
	},

	startGame:function (){
		this.game.state.start('Play');
	},

	startMenu:function (){
		this.game.state.start('Menu');
	}
}