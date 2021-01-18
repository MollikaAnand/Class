const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myWorld,myEngine, ground;

function setup() {
  createCanvas(400,400);

myEngine = Engine.create();
myWorld = myEngine.world;

var ground_options = {
  isStatic: true
}
ground = Bodies.rectangle(200,390,400,20,ground_options)
console.log(ground)
World.add(myWorld, ground);

var ball_options = {

  'restitution': 0.8
}

ball= Bodies.circle(20,10,10,ball_options)
World.add(myWorld, ball);
}

function draw() {
  background(0); 
  Engine.update(myEngine)
  rectMode(CENTER)
  rect(200,200,50,50)
  rect(ground.position.x,ground.position.y, 400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 10,10)
 // drawSprites();
}