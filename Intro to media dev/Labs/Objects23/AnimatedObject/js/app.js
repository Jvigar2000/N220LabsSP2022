// Jameson Vigar
// 07/17/23
// N220
// "Animated Object"


function setup() {
    // create canvas
  createCanvas(400, 400);
  
  // create object
  object = {
    x: 100,
    y: 100,
    d: 50
  };
}

function draw() {
    // no background creates a cooler effect 
  //background(250);
  
  // Update circle properties
    object.x = object.x + 1; 
    object.y = object.y + 1; 
    object.d = object.d +1; 
  
  // Draw the circle

  circle(object.x, object.y, object.d );

  // was going to create a boundary to reset it 
  //if(object.x = 400){
   // object.x = 100;

   // object.d = 50;
// }



}

