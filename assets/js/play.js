
var updateDelay = 0, jumpTimer = 0, player, block, cursors;

var Play = {
	preload: function(){
		game.load.image('bg','assets/images/play_background.jpg');
		game.load.image('block','assets/images/block1.png');
		game.load.image('player','assets/images/player.png');

	},

	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);

		var bg = this.add.sprite(0,0,'bg');
		bg.width = game_width; bg.height = game_height;

		blocks = game.add.group();
		blocks.enableBody = true;
		//block.createMultiple(150, 'block', 1, false);
		
		//game.physics.arcade.enable(block, true);
		//game.physics.arcade.gravity.y = 15;

		player = game.add.sprite(50,550,'player');
		player.width = 40; player.height = 40;
		game.physics.arcade.enable(player, true);
		player.body.collideWorldBounds = true;
		player.body.gravity.y = 1000;
		player.immovable = true;
		player.moves = false;
		player.body.bounce.y = 0.1;

		cursors = game.input.keyboard.createCursorKeys();
	},

	update: function() {

		game.physics.arcade.collide(player,blocks);

		player.body.velocity.x = 0;

		if(cursors.left.isDown)
			player.body.velocity.x = -200;
		else if(cursors.right.isDown)
			player.body.velocity.x = 200;
		else if(cursors.up.isDown && ( player.body.onFloor() || player.body.onWall() ) && game.time.now > jumpTimer ){
			player.body.velocity.y = -500;
			jumpTimer = game.time.now + 750;
		}

	if(updateDelay % 90 == 0){
		var random = game.rnd.integerInRange(0,4);
	    for (var i = 1; i < random; i++)
	    	this.fire();
	}
	blocks.y = blocks.y + 2;

	
	updateDelay++;

	},

	fire: function(){
		var random = game.rnd.integerInRange(0,game_width);
		var block = blocks.create(random,100,'block',true);
		block.width = 40; block.height = 40;
		block.frame = game.rnd.integerInRange(0,6);
		block.exists = true;
		block.immovable = true;
		block.moves = false;
	},


	render: function(){
	
	}
}
