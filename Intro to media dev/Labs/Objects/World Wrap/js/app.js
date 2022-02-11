// Jameson Vigar
// 2/10/2022
// N220


function setup(){
    // create canvas
    createCanvas(800,600);
    // fill black
    fill("black");

}
// intialize object
 let wrld = {

    x: 1,
    y: 300,
    r: 50,
    color: "blue",

 };

function draw(){

   
    // refresh frame 
    if (frameCount % 1 == 0 ) { 
        // fill background white per frame
        background("white");
        // x position + 1
           wrld.x ++;
        // draw circle   
        fill(wrld.color);
        circle(wrld.x, wrld.y, wrld.r);
       }
    
       // if the circle reaches the boundary. reset to 1.
    if(wrld.x == 800){
        
        wrld.x = 1;

    }

    console.log(wrld.x);


}