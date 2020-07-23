
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var roof1, roof2, roof3, roof4, roof5;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter; 

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

	  bobDiameter = bob1.diameter;

	  roof1 = new Roof(270, 300, 50,30);
	  roof2 = new Roof(325, 300, 50,30);
	  roof3 = new Roof(385, 300, 50,30);
	  roof4 = new Roof(450, 300, 50,30);
	  roof5 = new Roof(505, 300, 50,30);
	  roof6 = new Roof(395, 300, 300, 30);

	  rope1 = new Rope(bob1.body, roof1.body, 9, 10);
	  rope2 = new Rope(bob2.body, roof2.body, 9, 10);
	  rope3 = new Rope(bob3.body, roof3.body, 9, 10);
	  rope4 = new Rope(bob4.body, roof4.body, 9, 10);
	  rope5 = new Rope(bob5.body, roof5.body, 9, 10);

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

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  roof6.display();

  rect(ground.position.x, ground.position.y, width, 10);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode 	=== UP_ARROW) {
       Matter.Body.applyForce(bob1.body, bob1.body.position, {x:1, y:-11.6});
	}
}



