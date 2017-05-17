var bg, updateDelay, player, blocks, cursors, foods, score, HP,
	textScore, textHP, index, jumpSound, hitSound, gameoverSound;

var Play = {
	preload: function(){
		//Carregamento de ficheiros necessarios
		this.game.load.image('bg','assets/images/background.jpg');
		this.game.load.image('block','assets/images/block.png');
		this.game.load.spritesheet('player', 'assets/images/player.png', 52.5, 69, 6);
		this.game.load.spritesheet('food','assets/images/food.png', 35, 37);
		this.game.load.audio('hit', 'assets/audio/hit.mp3');
		this.game.load.audio('jump', 'assets/audio/jump.mp3');
		this.game.load.audio('gameover', 'assets/audio/gameover.mp3');
	},

	create: function(){
		//Incializacao variaveis
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.updateDelay = 0;
		this.score = 0;
		this.HP = 50;
		this.index = 1;
		this.blockWidth = this.game.cache.getImage('block').width;
		this.blockHeight = this.game.cache.getImage('block').height;
		this.foodHeight = this.game.cache.getImage('food').height;

		//Imagem de fundo
		this.bg = this.add.sprite(0,0,'bg');
		this.bg.width = game_width; this.bg.height = game_height;

		game.physics.startSystem(Phaser.Physics.ARCADE);

		//Criacao do grupo blocks
		this.blocks = this.game.add.group();
		this.blocks.enableBody = true;
		this.blocks.createMultiple(250, 'block');

		//Criacao do grupo foods
		this.foods = this.game.add.group();
		this.foods.enableBody = true;
		this.foods.createMultiple(50, 'food', [1,0]);

		//Primeiras plataformas
		this.spacing = 200;
		this.startPlats();

		//Nova plataforma criada a cada 2s
		this.timer = game.time.events.loop(2000,this.addPlat, this);
		this.timer = game.time.events.loop(2000, this.incrementScore, this);
		
		//Inicializacao do jogador
		this.startPlayer();

		//Criacao do texto
		this.textScore = game.add.text(10, 50, 'Score: 0\nHealthPoints: 50');
		this.textScore.anchor.set(0);
	    this.textScore.align = 'align-left';
	    this.textScore.font = 'Arial';
	    this.textScore.fontSize = 25;
	    this.textScore.fill = '#fff';

	    //Criacao dos sons
		this.jumpSound = game.add.audio('jump');
		this.hitSound = game.add.audio('hit');
		this.gameoverSound = game.add.audio('gameover');
	},

	update: function() {
		this.player.body.velocity.x = 0;

		//Atualiza texto
		this.textScore.text = 'Score: '+this.score+'\nHealthPoints: '+this.HP;
		
		//Verifica colisoes
		this.game.physics.arcade.collide(this.player, this.blocks);
		this.game.physics.arcade.overlap(this.player, this.foods, this.killFood, null, this);

		//Game Over
		if(this.player.body.position.y >= this.game.world.height - this.player.body.height)
			this.gameOver();

		if(this.HP <= 0 || this.HP >= 100)
			this.gameOver();

		//Comportamento com os cursores
		if(this.cursors.up.isDown && this.player.body.wasTouching.down){
			this.HP -= 4;
			this.player.body.velocity.y = -850;
			this.jumpSound.play();
		}
		
		if(this.cursors.left.isDown){
			this.player.body.velocity.x = -500;
			this.player.frame = 3;

			if(this.cursors.up.isDown)
				this.player.frame = 5;
		}

		else if(this.cursors.right.isDown){
			this.player.body.velocity.x = 500;
			this.player.frame = 2;

			if(this.cursors.up.isDown)
				this.player.frame = 4;
		}

		if(!(this.cursors.right.isDown || this.cursors.left.isDown || this.cursors.up.isDown))
			this.player.frame = 0;

		//Score color
		if(this.HP < 25 || this.HP > 75){
			this.textScore.fill = '#ff0000';
		}
		else 
			this.textScore.fill = '#ffffff';

		//Atualizaçao variaveis
		if(this.updateDelay % 30 == 0){
			this.addFood();
			this.HP -= 1;
		}
		this.updateDelay++;
	},


	addBlock: function(x,y,index){
		var block = this.blocks.getFirstDead();
		var rand = Math.random()+0.5;

		//Niveis de dificuldade: transparencia dos blocos
		if(this.score < 25){
			if(rand < 0.5)
				rand = 0.5;
			block.alpha = rand;
		}
		if(this.score > 250){
			if(rand < 0)
				rand = 0;
			if(rand >0.5)
				rand = 0.5;
			block.alpha = rand;
		}

		//Propriedades de cada bloco
		block.reset(x,y);
		block.body.velocity.y = 100+this.index;
		block.body.immovable = true;
		block.alpha = rand;
		block.checkWorldBounds = true;
		block.outOfBoundsKill = true;
	},

	addPlat: function(y){
		var platSize = Math.ceil(this.game.world.width / this.blockWidth);
		var hole = Math.floor(Math.random() * (platSize - 3)) + 1;
		var rand = Math.floor(Math.random() * 3) + 2;

		if(typeof(y) == "undefined")
			y = -this.blockHeight;

		//Niveis de dificuldade: velocidade das plataformas
		this.index = 0;
		if(this.score > 50)
			this.index = 10;
		if(this.score > 100)
			this.index = 20;
		if(this.score > 250)
			this.index = 25;

		//Adiciona um bloco onde nao sera buraco
		for (var i = 0; i < platSize; i++){
			if (!(i <= hole + rand && i > hole))
				this.addBlock(i * this.blockWidth, y,this.index);
		}
	},

	startPlats: function(){
		var end = this.game.world.height - this.blockHeight, beginning = this.blockHeight;

		//Criacao de uma pagina inteira de plataformas
		for (var y = end; y >= beginning - this.blockHeight - 2 *(y + this.spacing); y = y - this.spacing)
			this.addPlat(y);
	},

	startPlayer: function(){
		//Propriedades do jogador
		this.player = game.add.sprite(50, 50, 'player');
		this.game.physics.arcade.enable(this.player);
		this.player.body.gravity.y = 2000;
		this.player.body.collideWorldBounds = true;
		this.player.body.bounce.y = 0;
	},

	addFood: function(){
		var food = this.foods.getFirstDead();
		var random = this.game.rnd.integerInRange(0,game_width);

		//Propriedades da comida
		food.anchor.setTo(0.5,1);
		food.reset(random,this.foodHeight);
		food.body.velocity.y = 200;
		food.body.immovable = true;
		food.checkWorldBounds = true;
		food.outOfBoundsKill = true;	
	},

	killFood: function(player, food){
		//Quando o jogador colide com a comida recebe pontos e ganha vida
		food.kill();
		this.incrementScore();
		this.HP += 10;
		this.hitSound.play();
	},

	incrementScore: function(){
		//Incrementa o score
		this.score++;
	},

	gameOver: function(option){
		this.gameoverSound.play();
		if (this.score < 3)
			this.game.state.start('Play');
		else
			this.game.state.start('GameOver');
	}
}