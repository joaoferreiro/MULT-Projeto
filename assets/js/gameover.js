var gameOverText, button1, button2;

var GameOver = {
	preload: function(){
		this.game.load.image('button', 'assets/images/button.png');
		this.game.load.image('bg', 'assets/images/background.png');
		this.game.load.image('gameOverlogo', 'assets/images/gameOverlogo.png');


	},

	create: function(){

		//Imagem de fundo
		this.bg = this.add.sprite(0, 0, 'bg');
		this.bg.width = game_width; this.bg.height = game_height;

		//Logotipo
		this.logo = this.add.sprite(15,50, 'gameOverlogo');
		this.logo.width = 400; this.logo.height = 200;
		

		this.button1 = this.add.button(75, 350, 'button', this.startGame, this);
		this.button1.width = 250; this.button1.height = 50;

		this.textButton1 = game.add.text(this.game.world.centerX, 378, 'Retry');
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