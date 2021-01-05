const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img;
var score = 0;
var backgroundImg;
var bg = "lightgray";

function preload() {

    polygon_img = loadImage("polygon.png");

    getBackgroundImage()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,410,1200,20);
    stand1 = new Ground(600,350,300,20);
    stand2 = new Ground(950, 250, 250,20);

    //level one block one
    box1 = new Box(480, 300, 40, 50);
    box2 = new Box(520, 300, 40, 50);
    box3 = new Box(560, 300, 40, 50);
    box4 = new Box(600, 300, 40, 50);
    box5 = new Box(640, 300, 40, 50);
    box6 = new Box(680, 300, 40, 50);
    box7 = new Box(720, 300, 40, 50);
    //level two block one
    box8 = new Box(520, 250, 40, 50);
    box9 = new Box(560, 250, 40, 50);
    box10 = new Box(600, 250, 40, 50);
    box11 = new Box(640, 250, 40, 50);
    box12 = new Box(680, 250, 40, 50);
    //level three block one
    box13 = new Box(560, 200, 40, 50);
    box14 = new Box(600, 200, 40, 50);
    box15 = new Box(640, 200, 40, 50);
    //level four block one
    box16 = new Box(600, 150, 40, 50);
    //level one block two
    box17 = new Box(870, 200, 40, 50);
    box18 = new Box(910, 200, 40, 50);
    box19 = new Box(950, 200, 40, 50);
    box20 = new Box(990, 200, 40, 50);
    box21 = new Box(1030, 200, 40, 50);
    //level two block two
    box22 = new Box(910, 150, 40, 50);
    box23 = new Box(950, 150, 40, 50);
    box24 = new Box(990, 150, 40, 50);
    //level three block two
    box25 = new Box(950, 100, 40, 50);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot = new SlingShot(this.polygon, {x: 100, y:200});
}

function draw(){
    background("lightgray");

    if(backgroundImg)
    background(backgroundImg);
    
    Engine.update(engine);

    textSize(30);
    fill("magenta");
    text("Score: " + score, 50, 40);

    ground.display();
    stand1.display();
    stand2.display();

    fill("lightblue");
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    
    fill("lightpink");
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();

    fill("turquoise");
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();

    fill("gray");
    box16.display();
    box16.score();

    fill("gray");
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();
    box20.display();
    box20.score();
    box21.display();
    box21.score();

    fill("pink");
    box22.display();
    box22.score();
    box23.display();
    box23.score();
    box24.display();
    box24.score();

    fill("turquoise");
    box25.display();
    box25.score();

    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(this.polygon);
    }
}

async function getBackgroundImage(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON=await response.json();
    console.log(responseJSON);
  
    var dateTime=await responseJSON.datetime;
    console.log(dateTime);
    var hour=dateTime.slice(11,13);
    console.log(hour);
  
    if(hour>=6 && hour<18){
        bg= "white";
    }
    else{
        bg= rgb(50, 40, 35);
    }

    backgroundImg = bg;
}