function setup() {
  createCanvas(600, 600);
  background("white");
  
  fill("#FAE107")
  beginShape();
  vertex(100, 250);
  vertex(300, 50);
  vertex(500, 250);
  endShape(CLOSE);
  
  fill("red")
  beginShape();
  vertex(100, 250);
  vertex(100, 550);
  vertex(500, 550);
  vertex(500, 250);
  endShape(CLOSE);
  
  fill("#FF9800")
  beginShape();
  vertex(350, 450);
  vertex(400, 450);
  vertex(400, 550);
  vertex(350, 550);
  endShape(CLOSE);
  
  fill("aqua")
  beginShape();
  vertex(200, 300);
  vertex(200, 350);
  vertex(300, 350);
  vertex(300, 300)
  endShape(CLOSE);
  
  fill("black")
  beginShape();
  vertex(250, 250);
  vertex(245, 300);
  endShape(CLOSE);
//nothing here just example
}
