// Jameson Vigar    
// 2/10/2022
// N220

// intialize object 
let pet = {

    x: 100,
    y: 100,
    r: 50,
    color: "blue",
    //offsetX: pet.x,

};
//setup canvas
function setup(){
    createCanvas(400,400);
    background("black");

}



// draw function
function draw(){
   
    fill(pet.color);
    circle(mouseX , mouseY, pet.r);
 background(black);

    /*if mousePressed(){
        offsetX + 1;
    }
    */
} 
   
