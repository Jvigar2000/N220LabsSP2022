// Jameson Vigar    
//1/2/22
//N220
// Red Remover


// Hoenstly I have been at this one for hours and cannot figure it out

  


// create canvas and set background to black
function setup(){
    createCanvas(600,600);
    background(0);

    

}
// draw function
function draw(){
    // set new color 
     newColor = color(170,200,150);
     // fill circle with new color 
     fill(newColor);
    // create circle 
     circle(150,150,200);
    // no red fill
     noRed = removeRed(newColor);
     // if mouse pressed remove red 
   if(mouseIsPressed){
        fill(noRed);
        circle(150,150,200);
       
    } 
  
}
// remove red function 
// does not work
function removeRed(){
    
    newColor.setRed(0);
    
}