let var1 = 50;
let var2 = 50;
let words = "hello world";

function setup(){
    createCanvas(500,500);
  
    var1 = var1 + 50;
    var2 = var2 * 3;
    
   words = words + "d";
} 

function draw(){

   text(words, var1, var2);

    console.log(var1, var2);

}