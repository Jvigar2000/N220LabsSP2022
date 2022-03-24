// Jameson Vigar
// 3/23/22
// N220

// get all 4 inputs 

let X1 = document.getElementById("x1");
let X2 = document.getElementById("x2");
let Y1 = document.getElementById("y1");
let Y2 = document.getElementById("y2");

function distance(){

    // calculate the differences
    let xDiff = X1 - X2;
    let yDiff = Y1 - Y2;

    // distance equation
    let d = Math.sqrt( xDiff*xDiff + yDiff*yDiff);

    // output distance
    console.log(d);


}