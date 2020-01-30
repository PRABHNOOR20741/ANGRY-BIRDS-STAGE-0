//Name Spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//creating boxes , ground , engine and world 
var engine, world;
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    //connecting the engine to Matter.Engine
    engine = Engine.create();
    world = engine.world;

    //creating the objects
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,50,50,100);
    ground = new Ground(200,390,400,20);
}

function draw()
{
    background(0);
    //updating the engine
    Engine.update(engine);
    //displaying the objects 
    box1.display();
    box2.display();
   ground.display();
}