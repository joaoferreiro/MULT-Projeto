var Menu = {

    preload : function() {
        game.load.image('bg', 'assets/images/menu_background.png');
        game.load.image('button1', 'assets/images/oi.png');
    },

    create: function () {
        var bg = this.add.sprite(0, 0, 'bg');
        bg.width = game_width; bg.height = game_height;
        this.add.button(0, 0, 'button1', this.startGame, this);
    },

    startGame: function () {
        this.state.start('Play');
    }
};