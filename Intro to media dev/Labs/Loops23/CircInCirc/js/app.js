// Jameson Vigar
// 7/7/23
// N220
// "Circle in Circle"

function setup() { 
      
    // Create Canvas of given size 
    createCanvas(400,300); 
    // set canvas color to white 
  background(255,255,255);
} 
  
// draw function 
function draw() { 
   
  // Create a loop that decreases
  for(x =  200 ; x  > 0; x-- ){  
    // Draw a circle that multiplies in size to create circles within circles
    circle(200, 150, x * 16 ); 
    //noFill();
    
    //fill(255,255,255);
  }
}
