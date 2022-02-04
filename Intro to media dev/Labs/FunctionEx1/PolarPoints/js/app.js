// Jameson Vigar
// 2/3/22
// N220


// create canvas
function setup(){
    createCanvas( 800,800);


}

function draw(){
    //translate
    translate(100,100);

    //res object 
   res  =  polarPoint() ;
    //test circle
    circle(res.x,res.y,10);

    

}
//polar point function
function polarPoint(x,y,r = 10){
    // x variable 
     var x = r * Math.sin(mouseX);
    // y variable 
     var y = r * Math.cos(mouseX);

     // output vector 
    return createVector(x,y);

    
}console.log(x,y);