class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
        this.load.image('background', '/assets/Images/back-ground.png');
        this.load.audio('backgroundMusic', '/assets/Sound_Effects/Adventure-320bit.mp3');
        this.load.spritesheet('bubble', '/assets/Images/bub.png', { frameWidth: 100, frameHeight: 100 })
      }
      
      
    create() {
        this.add.image(400, 300, 'background');
        // backgroundMusic = game.sound.play('backgroundMusic');
        scoreText = this.add.text(16, 16, 'score: 0', { fontsize: '32px', fill: '#000' });
        timerText = this.add.text(200, 16, 'timer: 0', { fontsize: '32px', fill: '#000' });
        cursors = this.input.keyboard.createCursorKeys();
        enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        backgroundmusic = this.sound.add('backgroundMusic');
        backgroundmusic.play();
        bubbleToGet = this.physics.add.sprite(200, 150, 'bubble');
        bubbleToGet.setCollideWorldBounds(true);
      }
      
    update() {
        let gameover = false;
        if(gameover){
            return;
        }
    
        if(bubbleToGet.x >= 750){
            bubbleToGet.x = 749;
            bubbleToGetXSpeed = bubbleToGetXSpeed * (-1);
            bubbleToGet.setVelocityX(bubbleToGetXSpeed);
        } else {
            bubbleToGet.x = bubbleToGet.x + bubbleToGetXSpeed;
        }
    
    
        if(bubbleToGet.x <= 50){
            bubbleToGet.x = 51;
            bubbleToGetXSpeed = bubbleToGetXSpeed * (-1);
            bubbleToGet.setVelocityX(bubbleToGetXSpeed);
        } else {
            bubbleToGet.x = bubbleToGet.x + bubbleToGetXSpeed;
        }
    
    
        if(bubbleToGet.y >= 550){
            bubbleToGet.y = 549;
            bubbleToGetYSpeed = bubbleToGetYSpeed * (-1);
            bubbleToGet.setVelocityY(bubbleToGetYSpeed);
        } else {
            bubbleToGet.y = bubbleToGet.y + bubbleToGetYSpeed;
        }
    
    
        if(bubbleToGet.y <= 50){
            bubbleToGet.y = 51;
            bubbleToGetYSpeed = bubbleToGetYSpeed * (-1);
            bubbleToGet.setVelocityY(bubbleToGetYSpeed);
        } else {
            bubbleToGet.y = bubbleToGet.y + bubbleToGetYSpeed;
        }
    }
}
