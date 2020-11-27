const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var slingshot;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var polygon;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);

  polygon = new Polygon(200,200,51);

  slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw() {

  background("black");
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
       
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    polygon.display();

    slingshot.display(); 

  drawSprites();
} 

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}