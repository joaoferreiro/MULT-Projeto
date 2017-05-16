var bg, button1, button2, button3, button4, logo;

var Menu = {
	
	preload: function(){
		this.game.load.image('bg', 'assets/images/play_background.jpg');
		this.game.load.image('logo', 'assets/images/logo.png');
		this.game.load.image('play_button', 'assets/images/play_button.png');
		this.game.load.image('options_button', 'assets/images/options_button.png');
		this.game.load.image('help_button', 'assets/images/help_button.png');
		this.game.load.image('about_button', 'assets/images/about_button.png');
	},

	create: function(){
		bg = this.add.sprite(0, 0, 'bg');
		bg.width = game_width; bg.height = game_height;

		logo = this.add.sprite(15,50, 'logo');
		logo.width = 400; logo.height = 200;

		button1 = this.add.button(100, 300, 'play_button', this.startGame, this);
		button2 = this.add.button(100, 375, 'options_button', this.startOptions, this);
		button3 = this.add.button(100, 450, 'help_button', this.startHelp, this);
		button4 = this.add.button(295, 525, 'about_button', this.startAbout, this);
		button1.width = 200; button1.height = 50; button2.width = 200; button2.height = 50;
		button3.width = 200; button3.height = 50; button4.width = 100; button4.height = 25;
	},
	startGame: function(){
		this.state.start('Play');
	}/*,

	startOptions: function(){
		this.state.start('Options');
	},

	startHelp: function(){
		this.state.start('Help');
	}

	startAbout: function(){
		this.state.start('About')
	}*/

}