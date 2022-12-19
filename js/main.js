var game;

var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
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

