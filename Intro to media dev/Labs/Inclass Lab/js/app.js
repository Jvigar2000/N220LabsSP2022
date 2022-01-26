//Jameson Vigar
// 1/20/22
// n220

// size varibale 
let size = 1;

//Create Canvas
function setup(){

 createCanvas(800,600);
 console.log(size);

}

// When mouse is pressed increase size by 10, once 50 is reaxhed stopped growing 
/*function mousePressed(){
        if (size < 50){
            size = size + 10;
        } else{
            size = 50;
        }
    }
*/
    function draw(){
        if(mouseIsPressed && size < 50){
            size = size + 1;
            console.log('Fianlly!');
        }

 // cricle follows mouse    
circle(mouseX, mouseY, size);

// console shows size 
console.log(size);

}