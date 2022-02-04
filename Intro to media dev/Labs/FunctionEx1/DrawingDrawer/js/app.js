// Jameson Vigar
// 2/3/2022
// N220
// "Drawing Drawer"


//let x = 0;
q = 0;

// create Canvas 
function setup(){
    createCanvas(600, 600);
    // backgrond black
    background(0);

}

function draw(){
    //follow mouse
    drawGhost(mouseX, mouseY);
    // draw at specific location
    drawGhost(300, 350);

    // if mouse pressed show the circle 
    if(mouseIsPressed){
        drawGhost(mouseX,mouseY, +10)
    }

   


}
// creation of ghost object 
function drawGhost(x,y,z){

    circle(x +10 , y +10 ,z +100);
    circle(x + 1, y , 10);
    circle(x + 30, y , 10);
    rect(x + 10, y + 20, 15, 5);  
    

}
