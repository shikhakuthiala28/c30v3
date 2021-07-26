const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bgimg,food,bunny;
var rabbit;

function preload(){

  bgimg=loadImage("background.png");
  food=loadImage("melon.png");
  bunny= loadImage("Rabbit-01.png");

}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,725,width,50);

  rabbit=createSprite(width/2,height-100,50,50);
  rabbit.addImage(bunny);
  rabbit.scale=0.3;

  rope = new Rope(7,{x:width/2,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)

}

function draw() 
{
  background(51);

  image(bgimg,width/2,height/2,width,height);
  rope.show();

 image(food,fruit.position.x,fruit.position.y,80,80);
  Engine.update(engine);
  ground.show();

 drawSprites();
   
}
