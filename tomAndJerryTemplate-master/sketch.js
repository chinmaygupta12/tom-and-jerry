var catimg,cat,mouseimg,mouse,background2,backgroundimg,catimg2,mouseimg2,mouse2,cat4img,cat4
var mouse4,mouse4img
function preload() {
catimg = loadImage("cat1.png")
catimg2 = loadAnimation("cat2.png","cat3.png")
backgroundimg = loadImage("garden.png")
mouseimg = loadImage("mouse1.png")
mouseimg2 = loadAnimation("mouse2.png","mouse3.png")
cat4img = loadImage("cat4.png")
mouse4img = loadImage("mouse4.png")
}

function setup()
{    createCanvas(1000,800);
  background2 = createSprite(500,400,1000,800)
 background2.addImage(backgroundimg)
cat = createSprite(840,670,20,20)
cat.addImage(catimg)
cat.scale = 0.12
mouse = createSprite(140,670,20,20)
mouse.addImage(mouseimg)
mouse.scale = 0.1


cat.setCollider("rectangle",0,0,cat.width,cat.height);
mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
}

function draw() {

    background(0);
    if(mouse.isTouching(cat)){
mouse.addImage("mouseD",mouse4img)
mouse.changeImage("mouseD")
    cat.velocityX = 0
cat.addImage("catsit",cat4img)
cat.changeImage("catsit")
  }



    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.addAnimation("catrun",catimg2)
    cat.changeAnimation("catrun")
    cat.velocityX = -5
    mouse.addAnimation("mousetalk",mouseimg2)
    mouse.changeAnimation("mousetalk")
  }


}
