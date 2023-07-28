// Jameson Vigar
// 07/27/23
// N220
// "Click For Random"


//Array of four colors 
let colors = ['#0000FF','#008000','	#FFBF00','#800080'];

function setup() {
  
  // Create the canvas and the circle.
  createCanvas(800, 800);
 
  fill('0');
  
  circle(200,200,200);
  
}

// function to change the color 
function setColor(i) {
  fill(i);
  
  circle(200,200,200);

}

// mouse clicked function
function mouseClicked(){


  // checks the mouses postion in comparison to the radius to see if the mouse is in the circle 
 if (dist(mouseX, mouseY, 200, 200) <= 100){
    setColor(colors[Math.floor(Math.random() * 4)]);
  

 }
}