// Jameson Vigar
// 7/7/23
// N220
// "FizzBuzz"

function setup() { 
      
    // Create large canvas  
    createCanvas(2000,2000); 
   
    
} 


// create function to draw with 
function draw() {
    
    // set background
    background(200);
    
    let y = 100;
    
    // loop to begin the cycle of the 25 black circles
    for (let i = 0; i < 25; i++) {

        let x = i*50; 
        
        // if both divisible by 3 and 5, create a blue square
        if (i % 3 == 0 && i % 5 == 0) {
            
            // fill blue
            fill(0,0,255);

            //square creation
            square(x, y, 50);
        }
        // if only divisible by 5 create a green square 
        else if (i % 5 === 0) {

            // Fill green
            fill(0, 255, 0);

            // square creation 
            square(x, y, 50);
        }

        //if only divisible by 3 creates a purple circle 
        else if (i % 3 === 0) {
            // fills purple 
            fill(191, 64, 191);

            // Creates circle 
            circle(x+25, y+25, 50);
        }
        //if none apply, standard black circle 
        else {
        
            fill(0);
            circle(x+25, y+25, 50);
        }
    }
}
