
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 750, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//Create the Bodies Here.
	  bob1 = new Bob(280, 700, 50);
	  bob2 = new Bob(340, 700, 50);
	  bob3 = new Bob(400, 700, 50);
	  bob4 = new Bob(460, 700, 50);
	  bob5 = new Bob(520, 700, 50);

	  roof = new Roof(400, 400, 310, 20);

	  rope1 = new Rope(bob1.body, roof.body);
	  rope2 = new Rope(bob2.body, roof.body);
	  rope3 = new Rope(bob3.body, roof.body);
	  rope4 = new Rope(bob4.body, roof.body);
	  rope5 = new Rope(bob5.body, roof.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  rect(ground.position.x, ground.position.y, width, 10);

  /*rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();*/
  
  drawSprites();
 
}



