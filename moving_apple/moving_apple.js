var game, game_width=400, game_height=600;
var player, cursors, background, jumpTimer = 0;

game = new Phaser.Game(game_width, game_height, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });


function preload() {
    game.load.image('apple', 'apple.png', 32, 48);
    game.load.image('background', 'play_background.jpg');
}


function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.sprite(0, 0, 'background');
    background.width=game_width;background.height=game_height;

    game.physics.arcade.gravity.y = 500;

    player = game.add.sprite(32, 32, 'apple');
    player.width = 40;player.height = 40;

    game.physics.enable(player, Phaser.Physics.ARCADE);

    //player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    //player.body.checkCollision.up = false; n colide se estiver a andar para cima

    cursors = game.input.keyboard.createCursorKeys();
    
    //jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR); escolhe uma tecla
}


function update() {
    player.body.velocity.x = 0;
    
    if (cursors.left.isDown)
        player.body.velocity.x = -200;
    
    else if (cursors.right.isDown)
        player.body.velocity.x = 200;

    if (cursors.up.isDown && player.body.onFloor()/*.onWall()*/ && game.time.now > jumpTimer){
        player.body.velocity.y = -400;
        jumpTimer = game.time.now + 750;
    }
}


function render () {
    //game.debug.text(game.time.physicsElapsed, 32, 32);
    //game.debug.body(player);
    //game.debug.bodyInfo(player, 16, 24);
}