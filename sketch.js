let numFrames = 390;
let images = [];
let currentFrame = 1;

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;

let angle =0;
let angleDirection = 1;
let speed = 0.005;

let x = 25;
let speed2 = 5;

function preload(){
  img1 = loadImage('whales.png');
  img2 = loadImage('fish/something1.png');
  img3 = loadImage('fish/something2.png');
  img4 = loadImage('fish/something3.png');
  img5 = loadImage('fish/something4.png');
  img6 = loadImage('fish/something5.png');
  img7 = loadImage('fish/something6.png');
  for (let i = 1; i < numFrames; i++){
    images[i] = loadImage("media/backani" + i + ".png")//(1~390)
  }
}

function setup(){
   createCanvas(640,360);
   frameRate(24);
  }

 function draw() {
  background(0,0,0);
  
  textSize(32);
  fill( 102, 150, 255);
  text('click↓', 350, 175); 
  
  image(img6, width/2,height/2,220,200)
  if((mouseX > 300) && (mouseX < 580 ) && (mouseY > 120) && (mouseY < 360)){
 
    image(img6, width/2,height/2,260,230)
   
     if (mouseIsPressed) {
       if (mouseButton === LEFT) {
       image(images[currentFrame], 0, 0, width, height); //초기값 0 390 이상 되면 에러   
       image(img7, 300,120,300,300)
   
   
       if(currentFrame == numFrames-1 ){ //currentframe이 numfram-e-1한 값과 같으면 
        currentFrame = 1; //currnetframe이 1이 됨
       }
       currentFrame++; //curnetFrame = currentFrame + 1
      }
    }
  }

  
 
image(img1, mouseX-230, mouseY-100, 220, 220);//고래
   

 x = x + speed2;

if((x > width) || (x < 0)){
speed2 = speed2 * -1;
}

image(img4, x, 260, 120,100);

image(img5, x / 3 , 50, 120,100);


push();
rotate(angle);
// translate(150,100);
image(img2, 450, mouseY- 120, 100 ,150,);
image(img3, mouseX - 80, mouseY + 50 ,70, 60);

angle += speed * angleDirection;
 if((angle > QUARTER_PI) || (angle < 0 )){
  angleDirection *= -1; 
 }
 pop();



}