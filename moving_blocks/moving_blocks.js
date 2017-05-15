var game, game_width=400, game_height=600;
var player, cursors, background, jumpTimer = 0;

game = new Phaser.Game(game_width, game_height, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });


function preload() {
    game.load.image('platform', 'platform.png', 32, 48);
    game.load.image('background', 'play_background.jpg');
}

function create() {
	plat = [];
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
}

function update(){
    updateDelay++;
    for (var i = 4; i < plat.length + 3; i++)
		plat[i-3].y = plat[i-3].y + 1;
    
    if (updateDelay % 75 == 0) {
	
		var rand = Math.floor(Math.random() * 15);
		var rand2 = Math.floor(Math.random() * 10);

		for (var i = 4; i < rand; i++) {
			plat[i-3] = game.add.sprite(rand2+i*40, 50, 'platform');
			plat[i-3].width = 40;plat[i-3].height = 40;
		}
	}
}

function render(){
	
}