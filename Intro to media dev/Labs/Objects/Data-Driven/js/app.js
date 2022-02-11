// Jameson Vigar
// 2/10/2022
// Data Driven

//initialize object
let obj = {
    color: "blue",
    width: 300,
    height: 40,
    x: 400,
    y: 200,


};
// setup background
function setup(){
    createCanvas(800,800);
    background("black");


}

// draw function
function draw(){
    // draw rectangle based off object values
    fill(obj.color);
    rect(obj.x,obj.y, obj.height, obj.width);



}