// Jameson Vigar    
// 1/20/22
// Revised 7/4/23
// N220
// "Even Larger, Until Not "

// Initialize size variable 
let size = 1;

function setup(){
    // Create background canvas
    createCanvas(800,800);

    // set background to black
    background('Black');
}

function draw(){

    // Function to change the size per frame
   if (frameCount % 1 == 0 ) { 
     circle(400, 400, size);
        size ++;

    }
    //once the size reaches 200, the size resets to 1 
    if(size == 200){
        //backround is set to black to reset the canvas
        background('Black');

        size = 1
    }
    //log the size to the console
console.log(size);
}