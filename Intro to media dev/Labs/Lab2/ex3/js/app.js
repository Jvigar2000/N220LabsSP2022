// Jameson Vigar
// 1/26/22
// N220
// World Warp

x = 1;

function setup(){

    createCanvas(800,600);

    fill("black");

}

function draw(){

   

    if (frameCount % 1 == 0 ) { 
        background("white");
           x ++;
        circle(x, 300, 50);
       }
    

    if(x == 800){
        
        x = 1;

    }



}