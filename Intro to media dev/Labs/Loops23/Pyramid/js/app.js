// Jameson Vigar
// 7/7/23
// N220
// "Pyramid"


function setup(){

    // Creating the canvas
    createCanvas(800,800)


}

function draw(){

    
  // this initial code had it flipped and mirrored, resulting in me flipping the addition to subtraction 

    /* for ( z = 0; z < 4; z++){
            let x = z * 100;
            let y = 100;

        for ( i = 0; i < z; i++){

        }
        for ( i = 0; i <= z; i++){

            fill(255,0,0);

            square( x, y, 50 );
            


            y = y + 100;

        }

        

}   
    */ 
   // Loop 1 
    for ( z = 4; z > 0; z--){

        // creating the x varible to space each square apart 
        let x = z * 50;

        // the intial y position
        let y =300;

    // nested loop 
    for ( i = 4; i >= z; i--){

        // fill square red 
        fill(255,0,0);

        // create square 
        square( x, y, 50 );
        
        // shift squares down 
        y = y - 50;

    }

    }

}