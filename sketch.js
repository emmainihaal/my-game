var man,food,rock,man1,rock1,food1,bg,bg1;

function preload(){
  man1 = loadImage("surviour.png");
  food1 = loadImage("food.jpg");
  bg1 = loadImage("background.jpg");
  rock1 = loadImage("rock.png");
}

function setup() {
  createCanvas(600, 600);
  bg = createSprite(300,300,600,600);
  bg.addImage("bg1");

  man = createSprite(100,200,20,10);
  man.addImage("man1");

  food = createSprite(500,100,20,10);
  food.addImage("food1");
  
  rock1 = createSprite(300.100,20,10);
  rock1.addImage("rock1");
}

function draw() {
  drawSprites();
}