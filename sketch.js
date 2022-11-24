function setup() {
  createCanvas(400, 400);
}
let xBol=200;
let yBol=200;
let diametro=50
let velocidadex=1;
    
let euX=0
let yRakE=160
let LRakE=15
let ARakE=90

let xRakD=385
let yRakD=160
let lRakD=15
let ARakD=90

function draw(){
  background(0);
  rect(xRakE,yRakE,LRakE,ARakE);
  rect(xRakD,yRakD,lRakD,ARakD);
  circle(xBol,yBol,diametro);
  xBol +=velocidadex;
  if(xBol+diametro/2>=400){
    velocidadex *=-1 
  }
  if(xBol-diametro/2<=0)
    velocidadex *=-1
}