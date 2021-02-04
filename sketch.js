//Create variables here
var happydog;
var dog;
var database;
var foodS;
var foodStock;
function preload()
{
  //load images here
  //backgroundImg = loadImage("sprites/bg.png");
  dogImage=loadImage("dogImg.png");
  happydogImage=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250);
  dog.loadImage("dogImage");
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happydogImage);
}
text("NOTE:press up arrow key to feed Drago milk");
stroke("blue");
fill("purple");
  drawSprites();
  //add styles here
//right the text-
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

  }
  database.ref('/').update({
    Food:x
  }

  )
}

