class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload() {
        this.load.image("startButton", "assets/Images/startbut.png");
    }
    create() {
        console.log('SceneTitle');
        var startGameButton = this.add.image(1000, 1000, "startButton");
        startGameButton.setInteractive();
        startGameButton.on("pointerdown", this.startGame, this);
    }
    startGame() {
        this.scene.start('SceneMain');
    }
    update() {
    }
}
