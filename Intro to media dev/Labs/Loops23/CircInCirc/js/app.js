// Jameson Vigar
// 7/7/23
// N220
// "Circle in Circle"

function setup() { 
      
    // Create Canvas of given size 
    createCanvas(300,300); 
    // set canvas color to white 
  background(200);
} 
  
// draw function 
function draw() { 
   
  // Create a loop that decreases
  for(x =  40 ; x  > 0; x-- ){  
   
    fill(255,255,255);
     //noFill();
      // Draw a circle that multiplies in size to create circles with circles inside 
    circle(150, 150, x * 7.5 ); 

    // the x multiplier was found through trial and error as well as the the original diameter 
   
    
    
  }
}
