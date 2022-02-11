// Jameson Vigar    
// 2/10/2000
// N220

// intialize object 
let pet = {

    x: 100,
    y: 100,
    r: 50,
    color: "blue",
    offsetX: 0,

};
//setup canvas
function setup(){
    createCanvas(400,400);
    background("black");

}
// mouse pressed function
function mousePressed(){
    if (value ==0 ){
        circle(mouseX + offsetX , mouseY, pet.r);

    offsetX ++;

    } else {
        circle(mouseX - offsetX  , mouseY, pet.r);
        offsetX --;
    }
} console.log(mousePressed);

// draw function
function draw(){

    fill(pet.color);
    circle(mouseX - offsetX  , mouseY, pet.r);

    

   
}