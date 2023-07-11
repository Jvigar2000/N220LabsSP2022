// Jameson Vigar
// 07/11/23
// n220
// 'Dripping Water'

function setup(){

    //create canvas
    createCanvas(700,700);

}

// array for y position of circles 
 circleY=[];  

//diameter of the circle
diameter = 50;

function draw() {

    
    //loop to create circles and add to array
    
    for(let i = 0; i < circleY.length; i++){
    
    // width/2 puts the circle in the middle of the screen
    // the y is pulled from the array
    
    circle(width/2,circleY[i], 40);
    
    // moves the y 5 pixels for the next loop
    circleY[i]=circleY[i]+5;
    
    }
    

    // after 10 frames reset to 0, and create a new circle 
    if (frameCount == 10) { 
       
        frameCount = 0;
       
        
        circleY.push(0);
    
        //console.log(frameCount);
    }
    
    }