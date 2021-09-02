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

let ground;
let fruit,rope;
let fruitLink

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(250,690,500,20);
  rope = new Rope(4,{x:200,y:30})
  
  var fruit_options={
    density:0.001,
    isStatic:false
  }
  fruit = Bodies.circle(300,300,50,fruit_options)

  fruitLink = new Link(rope,fruit)

  Composite.add(rope.body,fruit)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
   
  ellipse(fruit.position.x,fruit.position.y,30,30)
  ground.display()
  rope.show()
}




