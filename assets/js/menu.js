var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('menu_background', './assets/images/menu_background.png')
        game.load.image('button', './assets/images/oi.png');
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        var menu_background = this.add.sprite(0, 0, 'menu_background');
        menu_background.width = game_width;menu_background.height = game_height;
        this.add.button(0, 0, 'button', this.startGame, this);


    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Play');

    }


};