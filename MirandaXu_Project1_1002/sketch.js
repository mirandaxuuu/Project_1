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
  createCanvas(600,600);
}

function draw() {
  //first: draw background 4 sections
  sections(); 
  
  //then: draw 4 burgers
  burger(0,0); //1st burger
  push();
  translate(300,0);
  burger(5,10); //2nd burger (upper right)
  translate(0,300);
  burger(10,15); //3rd burger (lower right)
  translate(-300,0);
  burger(10,-5); //4th burger (lower left)
  pop();
  
  //eat the burgers
  if(mouseX<300 && mouseY<300){
    eat(255,220,151); //eats 1st burger
  }
  else if(mouseX<300 && mouseY>300){
    push();
    translate(0,300); 
    eat(255,220,226); //eats 4th burger
    pop();
  }
  else if(mouseX>300 && mouseY<300){
    push();
    translate(300,0); 
    eat(255,166,138); //eats 2nd burger
    pop();
  }
  else if(mouseX>300 && mouseY>300){
    push();
    translate(300,300);
    eat(212,186,165); //eats3rd burger
    pop();
  }
  
  //create crumbs around the cursor
  crumbs(mouseX+random(-20,20), mouseY+random(-20,20));
  
}


function sections(){ //4 sections background
  noStroke();
  fill(255,220,151);
  rect(0,0,300,300); //upper left section 1
  fill(255,166,138);
  rect(300,0,300,300); //upper right section 2
  fill(212,186,165);
  rect(300,300,300,300); //lower right section 3
  fill(255,220,226);
  rect(0,300,300,300); //lower left section 4

}


function burger(r,g){ //r and g allow user to manually adjust the color of burger
  noStroke();
  fill(212-r,162-g,90);
  ellipse(150,200,180,90); //base bread
  
  fill(163-r,122-g,39);
  ellipse(150,180,180,100); //beef
  
  fill(255-r,92-g,72);
  ellipse(110,170,90,80); 
  ellipse(190,170,90,80); //tomatoes
  
  fill(255-r,234-g,96);
  quad(45,180,140,220,245,180,150,130); //cheese
  
  fill(179-r,232-g,65);
  triangle(120,200,170,220,220,150);
  triangle(80,150,70,200,150,200);
  triangle(230,150,225,200,150,190); //lettuce
  
  fill(212-r,162-g,90);
  ellipse(150,150,180,110); //top bread
  
  stroke(255-r,241,185,200);
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


function eat(r,g,b){ //create triangles that block the burger
                      //so it seems like the burger is eaten
  noStroke();
  fill(r,g,b);
  triangle(180,150,280,110,280,220);
}


function crumbs(x,y){
  frameRate(7);
  noStroke();
  fill(random(255),random(255),random(255)); //2 round crumbs
  ellipse(x,y,8,8);
  fill(random(255),random(255),random(255));
  ellipse(mouseX,mouseY,8,8);
  
  fill(random(255),random(255),random(255)); //1st triangle crumb
  a = mouseX+random(20,40);
  b = mouseY+random(20,40);
  triangle(a,b,a+10,b-10,a+15,b+5);
  
  fill(random(255),random(255),random(255)); //2nd triangle crumb
  c = mouseX-random(10,30);
  d = mouseY-random(10,30);
  triangle(c,d,c,d-10,c+15,d-5);
  
}