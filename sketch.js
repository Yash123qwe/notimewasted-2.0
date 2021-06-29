var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

    box1=createSprite(0,580,360,30)
    box1.shapeColor = "blue"

    box2=createSprite(295,580,200,30)
    box2.shapeColor = "red"

    box3=createSprite(515,580,200,30)
    box3.shapeColor = "purple"

    box4=createSprite(740,580,220,30)
    box4.shapeColor = "cyan"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;
    
  

}

function draw() {
    background(rgb(169,169,169));
    camera.position.x = ball.x
    camera.position.y = ball.y
    edge=createEdgeSprites() 
    ball.bounceOff(edge)
    
    if(box1.isTouching(ball) && ball.bounceOff(box1)){
     ball.shapeColor = "blue"
     music.play()
     
    }
   
    if(box2.isTouching(ball) && ball.bounceOff(box2)){
        ball.shapeColor = "red"
        music.play()
     
       }
       
    
       if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "purple"

        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop()
        text("GAME OVER", ball.x, ball.y)
       }
       
      
       if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = "cyan"
        music.play()
        
        
       }
   
    drawSprites()
}
