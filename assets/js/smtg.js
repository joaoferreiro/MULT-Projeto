var Play = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('snake', './assets/images/small.png');
        game.load.image('apple', './assets/images/small.png');
    },