
var updateDelay = 0, player, blocks, cursors;

var Play = {
	preload: function(){
		game.load.image('bg','assets/images/play_background.jpg');
		game.load.image('block','assets/images/block.png');
		game.load.image('player0','assets/images/player0.png');
		game.load.image('player1','assets/images/player1.png');
		game.load.image('player2','assets/images/player2.png');
		game.load.image('food1','assets/images/food1.png');
		game.load.image('food2','assets/images/food2.png');
	},

	create: function(){
		var bg = this.add.sprite(0,0,'bg');
		bg.width = game_width; bg.height = game_height;

		this.blockWidth = this.game.cache.getImage('block').width;
		this.blockHeight = this.game.cache.getImage('block').height;

		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.blocks = this.game.add.group();
		this.blocks.enableBody = true;
		this.blocks.createMultiple(250, 'block');

		this.timer = game.time.events.loop(1500,this.addPlat, this);

		this.spacing = 200;
		this.startPlats();

		this.createPlayer();

		this.cursors = this.game.input.keyboard.createCursorKeys();
	},

	update: function() {
		this.player.body.velocity.x = 0;

		this.game.physics.arcade.collide(this.player, this.blocks);

		if(this.player.body.position.y >= this.game.world.height - this.player.body.height)
			this.gameOver();

		if(this.cursors.up.isDown && this.player.body.wasTouching.down)
			this.player.body.velocity.y = -1000;

		if(this.cursors.left.isDown)
			this.player.body.velocity.x = -500;

		if(this.cursors.right.isDown)
			this.player.body.velocity.x = 500;

		updateDelay++;
	},

	addBlock: function(x,y){
		var block = this.blocks.getFirstDead();

		block.reset(x,y);
		block.body.velocity.y = 150;
		block.body.immovable = true;

		block.checkWorldBounds = true;
		block.outOfBoundsKill = true;
	},

	addPlat: function(y){
		var rand = Math.floor(Math.random() * 3) + 2;

		if(typeof(y) == "undefined")
			y = -this.blockHeight;

		var platSize = Math.ceil(this.game.world.width / this.blockWidth);

		var hole = Math.floor(Math.random() * (platSize - 3)) + 1;

		for (var i = 0; i < platSize; i++){
			if (!(i <= hole + rand && i > hole))
				this.addBlock(i * this.blockWidth, y);
		}
	},

	startPlats: function(){
		var end = this.game.world.height - this.blockHeight, beginning = this.blockHeight;

		for (var y = end; y >= beginning - this.blockHeight - 2 *(y + this.spacing); y = y - this.spacing)
			this.addPlat(y);
	},

	createPlayer: function(){
		this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player2');
		
		this.player.anchor.setTo(0.5,1);
		this.game.physics.arcade.enable(this.player);
		this.player.body.gravity.y = 2000;
		this.player.body.collideWorldBounds = true;
		this.player.body.bounce.y = 0.1;
	},

	gameOver: function(){
		this.game.state.start('Menu');
	}
}
