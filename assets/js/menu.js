var bg, button1, button2, button3, button4, logo;

var Menu = {
	
	preload: function(){
		this.game.load.image('bg', 'assets/images/play_background.jpg');
		this.game.load.image('logo', 'assets/images/logo.png');
		this.game.load.image('button', 'assets/images/button.png');
	},

	create: function(){
		bg = this.add.sprite(0, 0, 'bg');
		bg.width = game_width; bg.height = game_height;

		logo = this.add.sprite(15,50, 'logo');
		logo.width = 400; logo.height = 200;

		button1 = this.add.button(75,300 , 'button', this.startGame, this);
		button1.width = 250; button1.height = 50;

		textButton1 = game.add.text(this.game.world.centerX, 328, 'Play');
		textButton1.anchor.set(0.5);
	    textButton1.align = 'center';
	    textButton1.font = 'Arial';
	    textButton1.fontSize = 25;
	    textButton1.fill = '#000';

		button2 = this.add.button(75, 375, 'button', this.startOptions, this);
		button2.width = 250; button2.height = 50;

		textButton2 = game.add.text(this.game.world.centerX, 403, 'Options');
		textButton2.anchor.set(0.5);
	    textButton2.align = 'center';
	    textButton2.font = 'Arial';
	    textButton2.fontSize = 25;
	    textButton2.fill = '#000';
	    
	    button3 = this.add.button(75, 450, 'button', this.startHelp, this);
		button3.width = 250; button3.height = 50;

		textButton3 = game.add.text(this.game.world.centerX, 478, 'Help');
		textButton3.anchor.set(0.5);
	    textButton3.align = 'center';
	    textButton3.font = 'Arial';
	    textButton3.fontSize = 25;
	    textButton3.fill = '#000';
		
		button4 = this.add.button(75, 525, 'button', this.startAbout, this);
		button4.width = 250; button4.height = 50;
		textButton = game.add.text(this.game.world.centerX, 553, 'About');

		textButton.anchor.set(0.5);
	    textButton.align = 'center';
	    textButton.font = 'Arial';
	    textButton.fontSize = 25;
	    textButton.fill = '#000';

		 
		 
	},
	startGame: function(){
		this.state.start('Play');
	},

	startOptions: function(){
		this.state.start('Options');
	},

	startHelp: function(){
		this.state.start('Help');
	},

	startAbout: function(){
		this.state.start('About')
	}

}