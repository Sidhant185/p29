
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   base1 = new Ground(420,450,300,20);
   base3 = new Ground(1090,400,300,20);
   Ground1 = new Ground(650,590,1400,25);
  
 
  // base1 
   box1 = new box(320,430,50,50);
   box2 = new box(370,430,50,50);
   box3 = new box(420,430,50,50);
   box4 = new box(470,430,50,50);
   box5 = new box(520,430,50,50);

   box6 = new box(345,380,50,50);
   box7 = new box(395,380,50,50);
   box8 = new box(445,380,50,50);
   box9 = new box(495,380,50,50);
   
   box10 = new box(370,330,50,50);
   box11 = new box(420,330,50,50);
   box12 = new box(470,330,50,50);
  
   box13 = new box(395,280,50,50);
   box14 = new box(445,280,50,50);
  
   box15 = new box(420,230,50,50);

   
 //base3
	Bbox1 = new box(985,380,50,50);
	Bbox2 = new box(1035,380,50,50);
	Bbox3 = new box(1085,380,50,50);
	Bbox4 = new box(1135,380,50,50);
	Bbox5 = new box(1185,380,50,50);
 
	Bbox6 = new box(1010,330,50,50);
	Bbox7 = new box(1060,330,50,50);
	Bbox8 = new box(1110,330,50,50);
	Bbox9 = new box(1160,330,50,50);
	
	Bbox10 = new box(1035,280,50,50);
	Bbox11 = new box(1085,280,50,50);
	Bbox12 = new box(1135,280,50,50);
   
	Bbox13 = new box(1060,230,50,50);
	Bbox14 = new box(1110,230,50,50);
   
	Bbox15 = new box(1085,180,50,50);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
base1.display();
base2.display();
base3.display();
Ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

Bbox1.display();
Bbox2.display();
Bbox3.display();
Bbox4.display();
Bbox5.display();
Bbox6.display();
Bbox7.display();
Bbox8.display();
Bbox9.display();
Bbox10.display();
Bbox11.display();
Bbox12.display();
Bbox13.display();
Bbox14.display();
Bbox15.display();



  drawSprites();
 
}



