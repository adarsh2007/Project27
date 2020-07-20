
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
 var roof;
 var rope1,rope2,rope3,rope4,rope5;
 var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
     
	//Create the Bodies Here.
	roof=new Roof(70,200,500,70); 
	bobDiametre=40;


	bobObject1= new Bob(100,500,40);
	bobObject2= new Bob(150,500,40);
	bobObject3= new Bob(200,500,40);
	bobObject4= new Bob(250,500,40);
	bobObject5= new Bob(300,500,40);

	rope1=new Rope(bobObject1.body,roof.body,bobDiametre*2,0);
	rope2=new Rope(bobObject2.body,roof.body,bobDiametre*2,0);
	rope3=new Rope(bobObject3.body,roof.body,bobDiametre*2,0);
	rope4=new Rope(bobObject4.body,roof.body,bobDiametre*2,0);
	rope5=new Rope(bobObject5.body,roof.body,bobDiametre*2,0);


	Engine.run(engine);
	Engine.update(engine);								
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

function ifkeypressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:85,y:-85})

}


}

