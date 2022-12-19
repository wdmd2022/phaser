var game;

var config = {
        type: Phaser.AUTO,
        width: 2000,
        height: 2000,
        parent: 'phaser-game',
        scene: [SceneTitle,SceneMain]
    };

game = new Phaser.Game(config);

