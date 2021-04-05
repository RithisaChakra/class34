const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var box1
function setup() {
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(500,690,1000,20)
box1 = new Box(800,670,50,50)
}

function draw() {
    ground.display();
    box1.display();
}


