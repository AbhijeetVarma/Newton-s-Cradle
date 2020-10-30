
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4,bob5,support,rope1,rope2,rope3,rope4,rope5


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob1 = new Bob(200,550,(0,175,175));
	bob2 = new Bob(300,550,(0,175,175));
	bob3 = new Bob(400,550,(0,175,175));
	bob4 = new Bob(500,550,(0,175,175));
	bob5 = new Bob(600,550,(0,175,175));

	support = new Support(400,200,500,20);

	rope1 = new constraint(bob1.body,support.body,-200,0);
	rope2 = new constraint(bob2.body,support.body,-100,0);
	rope3 = new constraint(bob3.body,support.body,0,0);
	rope4 = new constraint(bob4.body,support.body,100,0);
	rope5 = new constraint(bob5.body,support.body,200,0);
	
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  


support.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


/*if(keyDown("up")){
	
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:400,y:400});

}*/

	

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
}




