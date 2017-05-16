var Play = {
    preload: function(){ 
        this.game.load.image('tile', 'tile.png'); 
        this.game.load.image('player', 'player.png');
    },

    create: function() {
     
        var me = this;
     
        //Get the dimensions of the tile we are using
        me.tileWidth = me.game.cache.getImage('tile').width;
        me.tileHeight = me.game.cache.getImage('tile').height;

        //Set the background colour to blue
        me.game.stage.backgroundColor = '479cde';
     
        //Enable the Arcade physics system
        me.game.physics.startSystem(Phaser.Physics.ARCADE);
     
        //Add a platforms group to hold all of our tiles, and create a bunch of them
        me.platforms = me.game.add.group();
        me.platforms.enableBody = true;
        me.platforms.createMultiple(250, 'tile');

        me.timer = game.time.events.loop(1500, me.addPlatform, me);

         //The spacing for the initial platforms
        me.spacing = 200;
         
        //Create the inital on screen platforms
        me.initPlatforms();

        //Add the player to the screen
        me.createPlayer();

        me.cursors = me.game.input.keyboard.createCursorKeys();  
     
    },

    update: function() { 
        var me = this;
        me.player.body.velocity.x = 0;
     
        //Make the sprite collide with the ground layer
        me.game.physics.arcade.collide(me.player, me.platforms);
     
     
        //Check if the player is touching the bottom
        if(me.player.body.position.y >= me.game.world.height - me.player.body.height){
            me.gameOver();
        }

        //Make the sprite jump when the up key is pushed
        if(me.cursors.up.isDown && me.player.body.wasTouching.down) {
            me.player.body.velocity.y = -1400;
        }
        //Make the player go left
        if(me.cursors.left.isDown){
            me.player.body.velocity.x = -500;
        }
        //Make the player go right
        if(me.cursors.right.isDown){
            me.player.body.velocity.x = 500;
        }
     
    },

    addTile: function(x, y){
     
        var me = this;
     
        //Get a tile that is not currently on screen
        var tile = me.platforms.getFirstDead();
     
        //Reset it to the specified coordinates
        tile.reset(x, y);
        tile.body.velocity.y = 150; 
        tile.body.immovable = true;
     
        //When the tile leaves the screen, kill it
        tile.checkWorldBounds = true;
        tile.outOfBoundsKill = true;    
    },
     
    addPlatform: function(y){
     
        var me = this;
        var rand = Math.floor(Math.random() * 3) + 2;

        //If no y position is supplied, render it just outside of the screen
        if(typeof(y) == "undefined"){
            y = -me.tileHeight;
        }
     
        //Work out how many tiles we need to fit across the whole screen
        var tilesNeeded = Math.ceil(me.game.world.width / me.tileWidth);

        //Add a hole randomly somewhere
        var hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;

        //Keep creating tiles next to each other until we have an entire row
        //Don't add tiles where the random hole is
        for (var i = 0; i < tilesNeeded; i++){
            if (!(i <= hole + rand && i > hole)){
                this.addTile(i * me.tileWidth, y); 
            }           
        }
    },
    



    initPlatforms: function(){
     
        var me = this,
            bottom = me.game.world.height - me.tileHeight,
            top = me.tileHeight;
     
        //Keep creating platforms until they reach (near) the top of the screen
        for(var y = bottom; y >= top - me.tileHeight - 2*(y + me.spacing); y = y - me.spacing){
            me.addPlatform(y);
        }
     
    },

    createPlayer: function(){
        var me = this;
     
        //Add the player to the game by creating a new sprite
        me.player = me.game.add.sprite(me.game.world.centerX, me.game.world.centerY, 'player');
        me.player.width = 40; me.player.height = 40;
        //Set the players anchor point to be in the middle horizontally
        me.player.anchor.setTo(0.5, 1.0);
     
        //Enable physics on the player
        me.game.physics.arcade.enable(me.player);
     
        //Make the player fall by applying gravity
        me.player.body.gravity.y = 2000;
     
        //Make the player collide with the game boundaries 
        me.player.body.collideWorldBounds = true;
     
        //Make the player bounce a little
        me.player.body.bounce.y = 0.1;
     
    },

    gameOver: function(){
        this.game.state.start('Play');
    }

     
}