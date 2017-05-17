var bg, text1, text2, text3, text4, button, text;

var About = {
	
	preload: function(){
		//Carregamento de ficheiros necessarios
		this.game.load.image('bg', 'assets/images/background.jpg');
		this.game.load.image('text1', 'assets/images/about1.png');
		this.game.load.image('text2', 'assets/images/about2.png');
		this.game.load.image('text3', 'assets/images/about3.png');
		this.game.load.image('text4', 'assets/images/about4.png');
	},

	create: function(){
		//Imagem de fundo
		this.bg = this.add.sprite(0, 0, 'bg');
		this.bg.width = game_width; this.bg.height = game_height;
		
		//texto
		this.text1 = this.add.sprite(this.game.world.centerX, 150, 'text1');
		this.text1.anchor.set(0.5); this.text1.width= 350;
		this.text2 = this.add.sprite(this.game.world.centerX, 325, 'text2');
		this.text2.anchor.set(0.5); this.text2.width= 350;
		this.text3 = this.add.sprite(this.game.world.centerX, 425, 'text3');
		this.text3.anchor.set(0.5); this.text3.width= 350;
		this.text4 = this.add.sprite(this.game.world.centerX, 525, 'text4');
		this.text4.anchor.set(0.5); this.text4.width= 350;

		//Botao Back
		this.button = this.add.button(200, 700, 'button', this.goBack, this);
		this.button.width = 150; this.button.height = 50;

		this.text = game.add.text(275, 728, 'Back');
		this.text.anchor.set(0.5);
		this.text.align = 'center';
		this.text.font = 'Arial';
		this.text.fontSize = 25;
		this.text.fill = '#000';
	},

	goBack: function(){
		this.state.start('Menu');
	}

}