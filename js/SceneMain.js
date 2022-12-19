class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        this.load.image('background', './assets/Images/background.png');
        this.load.audio('backgroundMusic', '/assets/Sound_Effects/Adventure-320bit.mp3')
      }
      
      
    create() {
        this.add.image(400, 200, 'background');
        // backgroundMusic = game.sound.play('backgroundMusic');
        scoreText = this.add.text(16, 16, 'score: 0', { fontsize: '32px', fill: '#000' });
        timerText = this.add.text(600, 16, 'timer: 0', { fontsize: '32px', fill: '#000' });
        cursors = this.input.keyboard.createCursorKeys();
        enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        backgroundmusic = this.sound.add('backgroundMusic');
        backgroundmusic.play();
      }
      
    update() {
      
      }
}
