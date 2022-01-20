// Jameson Vigar 
// 1/18/22
// N220

// Application level variables
let size = 10;

//Set up the application
    
function setup(){
    //Create canvas size 
    createCanvas(800, 600);


/*
circle(100,150, 40);
circle(300,150,40); 
arc(50,300,80,80,0, PI, CHORD); 

stroke(255,255,255);

fill(255,99,99);
circle(150,150,200);

fill(186,255,180);
circle(150,150,100);

fill(255,171,118);
circle(150,150,50);
 */
}
  function draw(){
       // circle(mouseX,mouseY, frameCount/30);
    
       //increase size
       size = size +1;
       console.log(size);
       
       //change circle to red 
       fill(255,99,99);
       if(size > 200){
           
            fill(255,99,255);

       }
       //Change size of circle OT
       circle(150,150,size);

       

 }