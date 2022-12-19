class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload() {
        this.preload.image("startButton", "assets/Images/start.png");
    }
    create() {
        console.log('SceneTitle');
        var startGameButton = this.add.image(300, 400, "startButton");
        startGameButton.setInteractive();
        image.on("pointerdown", this.startGame, this);
    }
    update() {
    }

    startGame() {
        this.scene.start('SceneMain');
    }
}
