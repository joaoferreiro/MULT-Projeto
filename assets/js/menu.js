var bg, logo, button1, button2, button3, button4, textButton1, textButton2, textButton3, music;

var Menu = {
	
	preload: function(){
		//Carregamento de ficheiros necessarios
		this.game.load.image('bg', 'assets/images/background.jpg');
		this.game.load.image('logo', 'assets/images/logo.png');
		this.game.load.image('button', 'assets/images/button.png');
		this.game.load.image('sound', 'assets/images/sound.png')
		this.game.load.image('bar', 'assets/images/bar.png');
		this.game.load.audio('music', 'assets/audio/music.mp3');
	},

	create: function(){
		//Imagem de fundo
		this.bg = this.add.sprite(0, 0, 'bg');
		this.bg.width = game_width; this.bg.height = game_height;

		//Logotipo
		this.logo = this.add.sprite(15,50, 'logo');
		this.logo.width = 400; this.logo.height = 200;

		//Botao Play
		this.button1 = this.add.button(75,300 , 'button', this.startGame, this);
		this.button1.width = 250; this.button1.height = 50;
		//Texto Play
		this.textButton1 = game.add.text(this.game.world.centerX, 328, 'Play');
		this.textButton1.anchor.set(0.5);
	    this.textButton1.align = 'center';
	    this.textButton1.font = 'Arial';
		this.textButton1.fontSize = 25;
	    this.textButton1.fill = '#000';
	    
	    //Botao Help
	    this.button2 = this.add.button(75, 375, 'button', this.startHelp, this);
		this.button2.width = 250; this.button2.height = 50;
		//Texto Help
		this.textButton2 = game.add.text(this.game.world.centerX, 403, 'Help');
		this.textButton2.anchor.set(0.5);
	    this.textButton2.align = 'center';
	    this.textButton2.font = 'Arial';
	    this.textButton2.fontSize = 25;
	    this.textButton2.fill = '#000';
		
		//Botao About
		this.button3 = this.add.button(75, 450, 'button', this.startAbout, this);
		this.button3.width = 250; this.button3.height = 50;
		//Texto About
		this.textButton3 = game.add.text(this.game.world.centerX, 478, 'About');
		this.textButton3.anchor.set(0.5);
	    this.textButton3.align = 'center';
	    this.textButton3.font = 'Arial';
	    this.textButton3.fontSize = 25;
	    this.textButton3.fill = '#000';

		this.button4 = this.add.button(350,15,'sound', this.handleSound, this);	
		this.button4.width = 40; this.button4.height = 40;
		this.music = game.add.audio('music');
    	this.music.play();
    	//this.music.stop();
	},

	startGame: function(){
		this.state.start('Play');
	},

	startHelp: function(){
		this.state.start('Help');
	},

	startAbout: function(){
		this.state.start('About')
	},

	handleSound: function(){
		if(this.game.sound.mute)
			this.game.sound.mute = false;
		else
			this.game.sound.mute = true;
	}
}