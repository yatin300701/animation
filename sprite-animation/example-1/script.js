const canvas = document.getElementById('canvas-1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = './images/shadow_dog.png'

const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 1;
let frameY = 1;

function animate(){
    console.log(canvas)
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    
    ctx.drawImage(playerImage,0,0,frameX * spriteWidth,frameY * spriteHeight,0,0,spriteWidth,spriteHeight);
    frameX = (frameX%)
    requestAnimationFrame(animate);
}

animate()