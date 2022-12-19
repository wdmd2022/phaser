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
        var bubble;
        bubble = this.physics.add.sprite(200, 150, 'bubble');
        bubble.setCollideWorldBounds(true);

        this.anims.create({
            key: 'cycle',
            frames: this.anims.generateFrameNumbers('bubble', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        bubble.anims.play('cycle', true);
      }
      
    update() {
        if(gameover){
            return;
        }
    
        if(bubble.x >= 750){
            bubble.x = 749;
            bubbleXSpeed = bubbleXSpeed * (-1);
            bubble.setVelocityX(bubbleXSpeed);
        } else {
            bubble.x = bubble.x + bubbleXSpeed;
        }
    
    
        if(bubble.x <= 50){
            bubble.x = 51;
            bubbleXSpeed = bubbleXSpeed * (-1);
            bubble.setVelocityX(bubbleXSpeed);
        } else {
            bubble.x = bubble.x + bubbleXSpeed;
        }
    
    
        if(bubble.y >= 550){
            bubble.y = 549;
            bubbleYSpeed = bubbleYSpeed * (-1);
            bubble.setVelocityY(bubbleYSpeed);
        } else {
            bubble.y = bubble.y + bubbleYSpeed;
        }
    
    
        if(bubble.y <= 50){
            bubble.y = 51;
            bubbleYSpeed = bubbleYSpeed * (-1);
            bubble.setVelocityY(bubbleYSpeed);
        } else {
            bubble.y = bubble.y + bubbleYSpeed;
        }
    }
}
