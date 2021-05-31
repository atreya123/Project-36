//Create variables here
var dog,happyDog,sadDog,database,foodS,foodStock;

function preload()
{
 //load images here
 sadDog=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(200,400,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15

  database=firebase.database();

  foodStock=database.ref("Food");
  foodStock.on("value",readStock)
}


function draw() {  

  
  //add styles here

  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
}
 function readStock(data){
foodS=data.val();
 }
 function writeStock(x){
   if(x<=0){
     x=0
   }
   else{
     x=x-1
   }
database.ref("/").update({
Food:x
})
 }


