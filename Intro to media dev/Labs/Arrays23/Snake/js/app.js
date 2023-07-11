// Jameson Vigar
// 07/11/23
// N220
// 'Snake'

function setup(){

    // create canvas
    createCanvas(700,700); 
}

// create an array for both x and y positions
 x = [0,0,0,0,0,0,0,0,0,0,0];

 y = [0,0,0,0,0,0,0,0,0,0,0];


function draw() {

x.shift();
// this removes and alters the array based of the 'x' position of the mouse 
x.push(mouseX);

y.shift();
// this removes and alters the array based of the 'y' position of the mouse 
y.push(mouseY);

// make background black
background(0);

// loop to create the 10 circles 
for(let i=0;i<10;i++){

    //circles are created, the x and y values are pulled from the array which change from the mouse movement
circle( x[i], y[i], 30 ); 
}
}



