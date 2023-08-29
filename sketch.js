//shape and color
let c;
let b;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
 
  rectMode(CENTER);
  c=0;
  b=0;
}

function draw() {
  background(c, c+10, 235);
  noStroke();
  fill(c+100, c, 235);
  circle(width/2,b,300);
  
  fill(252, 243, 159);
  square(width/2,height/2,50);
  
  ellipse(width/2, height/2, 200, 400);
  
  rect(width/2,height/2,75,height*0.75);
  
  stroke(230, 186, 117);
  strokeWeight(2);
  triangle(width/2,0,width,300,0,300);
  
  strokeWeight(2);

  beginShape();
  vertex(width/2,height/2);
  vertex(width*0.25,800);
  vertex(width/2,700);
  vertex(width*0.75,800);
  vertex(width/2,height/2);
  endShape();

  c+=1;
  c = c%150;
  b+=5;
  b%50;
}


function mousePressed(){
  console.log(mouseX,mouseY);
}