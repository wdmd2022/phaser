var game;

window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'phaser-game',
        scene: [SceneTitle,SceneMain]
    };

    game = new Phaser.Game(config);
}
