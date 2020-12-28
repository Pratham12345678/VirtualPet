//Create variables here
var dog, happyDog;
var dogImage, happyDogImage;
var datbase;
var foodS, foodStock;
var gameState = 0;
var game;
var player, playerCount;

function preload()
{
  //load images here
  dogImage = loadImage(dogImg.png);
  happyDogImage = loadImage(dogImg1.png);
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  foodStock = database.ref();
  foodStock.on("value", readStock);
  dog = createSprite(200, 100, 50, 50);
  dog.addImage(dogImage);
  
}


function draw() {
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }
  textSize = 25;
  text(foodStock, 200, 200);
  drawSprites();
  //add styles here

}
function readStock(data){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  foodS = data.val();
}

function writeStock(x){
  database.ref('l').update({
    Food:x
  })
}


