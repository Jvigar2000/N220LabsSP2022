//Jameson Vigar
//1/20/22
//Revised 7/4/23
//N220
// "Counter"

// intitalize counter varible 
let counter = 0;

// create square canvas 
function setup(){
    createCanvas(600,600);
    
}

function draw(){
    // make background black 
 background(0);
    // Make numbers white
fill('white');
    // make text size readable 
textSize(50);
    // position counter in middle of the screen 
text(counter, 275 ,300);
    // every second counter will increase by one and scrren will refresh
if (frameCount % 60 == 0 ) { 
    // Counter + 1 
    counter ++;
      
}
    // console displays each number 
    console.log(counter);
}