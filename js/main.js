var game;

var config = {
        type: Phaser.AUTO,
        width: 1000,
        height: 1000,
        parent: 'phaser-game',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 500},
                debug: false
            }
        },
        scene: [SceneTitle,SceneMain]
    };

game = new Phaser.Game(config);

