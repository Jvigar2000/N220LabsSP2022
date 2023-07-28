// Jameson Vigar
// 07/27/23
// N220
// "Stoplight"

function setup(){

    // create canvas
    createCanvas(800, 800);
    fill(0);
    // set the x to align it in the middle, found through trial and error 
    // made a rectangle to make it pretty 
    rect(width/2.4, 100, 140, 400);

}
 
function draw(){

    // create array of colors using the hex code 
    let colors = ['#FF0000','#FFFF00','#00FF00'];

    // set starting values 
    // x = 100;
    y = 100;
    r = 100;

    // loop to create the circles for each color 
    for(i=0; i < colors.length; i++){

        // position circles on top of each other
        y = y + 100;

        // fill with color from array
        fill(colors[i]);
        // create circle // decided to use width/2 instead of a x to place it in the center 
        circle( width/2, y, r);

        //fill(colors[i]); // with fill after colors were out of order
        

    }

}