// Jameson Vigar
// 07/27/23
// N220
// "Stoplight"

function setup(){

    // create canvas
    createCanvas(800, 800);

}
 
function draw(){

    // create array of colors using the hex code 
    let colors = ['#FF0000','#FFFF00','#00FF00'];

    // set starting values 
    x = 100
    y = 100
    r = 100

    // loop to create the circles for each color 
    for(i=0; i < colors.length; i++){

        // position circles on top of each other
        y = y + 100

        // fill with color from array
        fill(colors[i]);
        // create circle
        circle(x, y, r);

        //fill(colors[i]); // with fill after colors were out of order
        

    }

}