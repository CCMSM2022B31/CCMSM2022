function setup() {
  createCanvas(400, 400);
}
let xBol=200;
let yBol=200;
let diametro=50
let velocidadex=1;
function draw(){
  background(0);
  circle(xBol,yBol,diametro);
  xBol +=velocidadex;
  if(xBol+diametro/2>=400){
    velocidadex *=-1 
  }
  if(xBol-diametro/2<=0)
    velocidadex *=-1
}