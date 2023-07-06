// Jameson Vigar
// 1/26/22
// Revised 7/4/23
// N220
// World Warp

// x position variable
x = 1;

function setup(){
    // create canvas
    createCanvas(800,600);
    // fill black
    fill("black");

}

function draw(){

   
    // refresh frame 
    if (frameCount % 1 == 0 ) { 
        // fill background white per frame
        background("white");
        // x position + 1
           x ++;
        // draw circle   
        circle(x, 300, 50);
       }
    
       // if the circle reaches the boundary. reset to 1.
    if(x == 800){
        
        x = 1;

    }

    console.log(x);


}