class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.rightArmX = this.bodyX + 100;
        //this.rightArmY = this.bodyY + 20;
        this.leftArmX = this.bodyX - 90;
        this.leftArmY = this.bodyY + 40;

        this.rightLegX = this.bodyX + 60;
        this.rightLegY = this.bodyY + 110;
        this.leftLegX = this.bodyX - 50;
        this.leftLegY = this.bodyY + 110;

        this.rightStalkX = this.bodyX + 40; 
        this.rightStalkY = this.bodyY - 100; 
        this.leftStalkX = this.bodyX - 30; 
        this.leftStalkY = this.bodyY -100; 

        this.rightEyeX = this.bodyX + 40; 
        this.rightEyeY = this.bodyY - 113; 
        this.leftEyeX = this.bodyX - 40; 
        this.leftEyeY = this.bodyY - 120; 

        this.centerEyeX = this.bodyX;
        this.centerEyeY = this.bodyY - 30;  

        this.smileX = this.bodyX; 
        this.smileY = this.bodyY + 20; 
        this.fangX = this.bodyX; 
        this.fangY = this.bodyY + 20; 
        
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkD.png");
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_yellowA.png"); 
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_yellowE.png"); 
        my.sprite.leftArm.flipX = true; 

        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_yellowC.png"); 
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_yellowC.png"); 
        my.sprite.leftLeg.flipX = true; 

        my.sprite.rightStalk = this.add.sprite(this.rightStalkX, this.rightStalkY, "monsterParts", "detail_yellow_eye.png");
        my.sprite.leftStalk = this.add.sprite(this.leftStalkX, this.leftStalkY, "monsterParts", "detail_yellow_antenna_large.png"); 
        my.sprite.leftStalk.flipX = true; 

        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_red.png");
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_yellow.png"); 
        my.sprite.centerEyeClosed = this.add.sprite(this.centerEyeX, this.centerEyeY, "monsterParts", "mouth_closed_sad.png");
        my.sprite.centerEyeOpen = this.add.sprite(this.centerEyeX, this.centerEyeY, "monsterParts", "eye_cute_light.png");
        my.sprite.centerEyeOpen.visible = false; 

        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_fangs.png"); 
        my.sprite.smile.flipY = true; 
        my.sprite.fang = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthI.png"); 
        my.sprite.fang.visible = false; 

        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.fang.visible = false; 
            my.sprite.smile.visible = true; 
        });

        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.fang.visible = true; 
            my.sprite.smile.visible = false; 
        }); 

        this.input.keyboard.on('keydown-D', (event) => {
            for (const spriteName in this.my.sprite) {
                const thisSprite = this.my.sprite[spriteName];
                thisSprite.x += 10;
              }
        })

        this.input.keyboard.on('keydown-A', (event) => {
            for(const spriteName in this.my.sprite){
                const thisSprite = this.my.sprite[spriteName]; 
                thisSprite.x -= 10; 
            }
        })
    
    
    
    }

       
            

    update() {
        let my = this.my;    // create an alias to this.my for readability
    }

}