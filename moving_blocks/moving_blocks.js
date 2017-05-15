var game, game_width=400, game_height=600;
var player, cursors, background, jumpTimer = 0;

game = new Phaser.Game(game_width, game_height, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });


function preload() {
    game.load.image('platform', 'ball.png');
    game.load.image('atari', 'apple.png');
    game.load.image('background', 'play_background.jpg');
   
}

function create() {

	updateDelay = 0;

	var rand = Math.floor(Math.random() * 15);
	var rand2 = Math.floor(Math.random() * 10);


    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.physics.arcade.gravity.y = 20;

    background = game.add.sprite(0, 0, 'background');
    background.width=game_width;background.height=game_height;

    balls = game.add.group();

    balls.createMultiple(500, 'platform', 1, false);
    //atari = game.add.sprite(200, 450, 'atari');

    //  Enable physics on everything added to the world so far (the true parameter makes it recurse down into children)
    game.physics.arcade.enable(balls, true);

    //atari.body.allowGravity = 0;
    //atari.body.immovable = true;

    cursors = game.input.keyboard.createCursorKeys();

    



	/*plat = [];
	updateDelay = 0;
	var rand = Math.floor(Math.random() * 15);
	var rand2 = Math.floor(Math.random() * 10);


    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.tileSprite(0, 0, game_width, game_height, 'background');
    background.width=game_width;background.height=game_height;

	for (var i = 2; i < rand; i++) {
		plat[i-3] = game.add.sprite(rand2+i*40, 50, 'platform');
		plat[i-3].width = 40;plat[i-3].height = 40;
	}

 	
    //player.body.bounce.y = 0.2;
    
    //player.body.checkCollision.up = false; n colide se estiver a andar para cima

    //cursors = game.input.keyboard.createCursorKeys();
    
    //jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR); escolhe uma tecla
    */
}

function fire(){
	var ball = balls.getFirstExists(false);

    if (ball)
    {
        ball.frame = game.rnd.integerInRange(0,6);
        ball.exists = true;
        var random = game.rnd.integerInRange(0,game_width);
        ball.reset(random, -60);
    }
}



function update(){
	if(updateDelay % 50 == 0){
		var random = game.rnd.integerInRange(0,10);
	    for (var i = 1; i < random; i++)
	    	game.time.events.loop(1500, fire, this);

	
	}
	updateDelay++;
   	balls.forEachAlive(checkBounds, this);

/*    updateDelay++;
    for (var i = 4; i < plat.length + 3; i++)
		plat[i-3].y = plat[i-3].y + 1;
    
    if (updateDelay % 75 == 0) {
	
		var rand = Math.floor(Math.random() * 15);
		var rand2 = Math.floor(Math.random() * 10);

		for (var i = 4; i < rand; i++) {
			plat[i-3] = game.add.sprite(rand2+i*40, 50, 'platform');
			plat[i-3].width = 40;plat[i-3].height = 40;
		}
	}*/
}

function checkBounds(ball) {

    if (ball.y > 600)
    {
        ball.kill();
    }

}


function render(){
	
}