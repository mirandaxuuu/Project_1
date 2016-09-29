/*
pseudo code - key word: "delicious"

4 square sections w/ different colors as background
draw a burger in each triangle with different colors
if mouse is in upper left section
  corresponding burger starts to get smaller
  (a triangle with no stroke and same color as background - blocks part of burger)
  (triangle gets bigger with time - burger gets smaller)
if mouse is in upper right section
  corresponding burger starts to get smaller
etc.
if burger totally disappears
  whole burger comes back
random pieces scatter around burger like the burger is bitten
*/

function setup() {
  createCanvas(900,900);
}

function draw() {
  sections();
  burger();
  
}

function sections(){ //4 sections background
  noStroke();
  fill(255,220,151);
  rect(0,0,300,300); //upper left section 1
  fill(255,166,138);
  rect(300,0,300,300); //upper right section 2
  fill(255,220,226);
  rect(0,300,300,300); //lower left section 3
  fill(212,186,165);
  rect(300,300,300,300); //lower right section 4
}

function burger(){
  fill(212,162,90);
  ellipse(150,200,180,90); //base bread
  
  fill(163,122,39);
  ellipse(150,180,180,100); //beef
  
  fill(255,92,72);
  ellipse(110,170,90,80); 
  ellipse(190,170,90,80); //tomatoes
  
  fill(255,234,96);
  quad(45,180,140,220,245,180,150,130); //cheese
  
  fill(179,232,65);
  triangle(120,200,170,220,220,150);
  triangle(80,150,70,200,150,200);
  triangle(230,150,225,200,150,190); //lettuce
  
  fill(212,162,90);
  ellipse(150,150,180,110); //top bread
  
  stroke(255,241,185);
  strokeWeight(5);
  point(150,150);
  point(100,170);
  point(130,120);
  point(110,150);
  point(156,110);
  point(130,180);
  point(200,130);
  point(190,180); //sesame on top
}