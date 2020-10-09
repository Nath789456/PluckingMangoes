
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone,stoneimg;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var boy, boyImg;
var string;
function preload()
{
  boyImg= loadImage("boy.png");
  stoneimg=loadImage("stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(width/2,670,width,20);

    stone= new Stone(100,500,50);
   // stone.addImage(stoneimg);
    //stone.scale=0.1;
    
    mango1= new Mango(590,320,35);
    mango2= new Mango(620,180,40);
    mango3= new Mango(510,350,25);
    mango4= new Mango(760,200,50);
    mango5= new Mango(780,400,30);
    mango6= new Mango(500,300,40);
    mango7= new Mango(550,200,45);
    mango8= new Mango(570,350,25);
    mango9= new Mango(760,350,40);
    mango10= new Mango(730,250,25);
    
    tree=new Tree (590,390,500,580);

    boy= createSprite(160,600,20,200);
    boy.addImage(boyImg);
    boy.scale=0.1;

    string=new String(stone.body,{x:140,y:500});


   	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240,248,255);

  textSize(20);
  text("Press Space to get a second Chance to Play!!",50 ,100);
  fontColor="red";
  

  ground.display();
  
  stone.display();

  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  string.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  string.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false);
    }
 }
 
 function keyPressed(){
   if(keyCode===32){
     Matter.Body.setPosition(stone.body,{x:235,y:420})
     string.attach(stone.body);
   }
 }