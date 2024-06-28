sini_3_x = 70
sini_3_y = 270;
sini_2_x = 340
sini_2_y = 260
sini_1_x = 60
sini_1_y = 200
jebena_x = 200
jebena_y = 220
coffee_y = 200
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(34,30,76)
//time mapping
  let s = second();
  let new_s = map(s,0,60,coffee_y,260);

// kemis
fill(34,9,81)
ellipse(200, 100, 300, 500);
fill(337,91,78);
ellipse(200, 200, 320, 520);
fill(34,9,81)
ellipse(200, 100, 300, 80);
ellipse(200, 80, 300, 80);
ellipse(200, 50, 290, 80);
ellipse(200, 20, 280, 80);
fill(337,91,78)
rect(200,150, 130, 400)

// table/trey
colorMode(HSB)
fill(23,52,67)
rect(200, 310, 400, 200)
fill(23,45,81)
rect(0, 300, 20, 200)
rect(400, 300, 20, 200)
rect(200, 200, 400, 20)
// jebena spout
fill(0)
quad(261, 198, 281, 119, 210, 170, 210, 170)

// jebena stopper
colorMode(HSB)
fill(0,86,81)
circle(jebena_x, jebena_y-140,30)
triangle(185, 78, 215, 78, 201, 43);
  
// jebena long middle part
fill(0)
rect(jebena_x, jebena_y-90, 50, 95,10);
fill(337,91,78)
ellipse(jebena_x-30, jebena_y-103, 40, 90);
ellipse(jebena_x+28, jebena_y-103, 40, 90);
fill(337,91,78);
arc(jebena_x+30, jebena_y-82, 40, 70, 0, PI);


// jebena handle
fill(0);
circle(162, 180, 90);
fill(337,91,78);
circle(152, 175, 60);

  //jebena holder back
fill(337,91,78)


  
  // jebena circle base
ellipseMode(CENTER)
fill(0)
circle(jebena_x, jebena_y, 130)
// conditions for cofffee
  colorMode(HSB)
  ellipseMode(CENTER)
  fill(26,100,31)
  arc(jebena_x, new_s, 100, 140, 0, PI);
  noFill()
  stroke(0)
  strokeWeight(10)
  circle(jebena_x, jebena_y, 130) 
 // jebena holder
noStroke()
fill(337,91,78)
rectMode(CENTER)
rect(jebena_x, 300, 150, 60, 60);
fill(265,96,82)
rect(jebena_x, 300, 10, 60, 0);
rect(jebena_x-20, 300, 10, 60, 0);
rect(jebena_x-40, 300, 10, 60, 0);
fill(86,96,36)
rect(jebena_x+20, 300, 10, 60, 0);
rect(jebena_x+40, 300, 10, 60, 0);

  // sini
  if (s>30){
    fill(90)
    arc(sini_1_x, sini_1_y, 60, 80, 0, PI);
    fill(0,86,81)
    ellipse(sini_1_x, sini_1_y+20, 10, 30)
fill(223,43,93)
    ellipse(sini_1_x-15, sini_1_y+20, 5, 15)
    ellipse(sini_1_x+15, sini_1_y+20, 5, 15)
  }
  if (s>40){
    fill(90)
    arc(sini_2_x, sini_2_y, 60, 80, 0, PI);
    fill(0,86,81)
    ellipse(sini_2_x, sini_2_y+20, 10, 30)
    fill(223,43,93)
    ellipse(sini_2_x-15, sini_2_y+20, 5, 15)
    ellipse(sini_2_x+15, sini_2_y+20, 5, 15)
  } if (s>50){
      fill(90)
    arc(sini_3_x, sini_3_y, 60, 80, 0, PI);
       fill(0,86,81)
    ellipse(sini_3_x, sini_3_y+20, 10, 30)
    fill(223,43,93)
    ellipse(sini_3_x-15, sini_3_y+20, 5, 15)
    ellipse(sini_3_x+15, sini_3_y+20, 5, 15)
    }
  
console.log(mouseX,mouseY)
  console.log(s)
}