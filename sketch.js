const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup()
{
	engine = Engine.create();
	world = engine.world;

	var canvas = createCanvas(1300,600);

	helicopter = new Helicopter(650,100,300,150);
	ground = new Ground(650,570,1300,20);
	packageBody = new Package(650,100,50,50);
	box = new Box(650,490);
}

function draw()
{
	background(0);
	Engine.update(engine);

	ground.display();
	packageBody.display();
	helicopter.display();
	box.display();
}

function keyPressed() 
{
	if (keyCode == 32) 
	{	   
	   Matter.Body.setStatic(packageBody.body,false);
	}
}