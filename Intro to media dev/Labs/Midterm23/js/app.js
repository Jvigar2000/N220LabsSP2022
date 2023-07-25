// Jameson Vigar
// Midterm 
// Space Invaders 



function setup(){

// create canvas
    createCanvas(600, 600);

    

    // score starts at 0 
    score = 0;

    

}

// creating an object to keep all the aliens the same size ect. 
    let aliens = {

        x: 50,
        y: 50,
        color: 'green'

    }


function draw (){
    // set background to black
    background(0);

    // score board 
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text("Score: " + score, width/2 ,75 );

// spawn player ship
player();

// draw the aliens 
spawnAliens();




}

// this function will generate each row of the aliens
function spawnAliens(){
    
    // array for the aliens 
     aliens = [];

     // initial coords 
    x = 25 ;
    y = 100 ;
    

    for(i = 0; i < 10; i ++){

        // shift over by 50px
        x = x + 50; 
        
        // fill green
        fill(0,255 ,0);
        // create each alien 'square'
        alien = square(x, y, 25 );
        
         
        

        // when the x position nears the end of the screen it return to start a new row 
        /*if( i == 12){
            y = y + 50; 

        }else if (i = 24){
            y = y + 50;
        }
        */

        // add individual aliens to the array
        aliens.push(alien);

        //console.log(aliens.length);

    }

    /*for(j = 0; j < 10; j++){

        x = x + 50; 
        y = y + 100; 
        square(x, y + 50 , 25 );
        fill(0, 255 ,0);


        

    */
}

function player(){

  
    

    playerShip =  
        beginShape(TRIANGLE_STRIP);
        vertex(30, 75);
        vertex(40, 20);
        vertex(50, 75);
        vertex(60, 30);
        vertex(70, 75);
        vertex(80, 20);
        vertex(90, 75);
        endShape();
        fill('white');
        

    
   }


    

   // designed the playership


// to move the player 
function move(){

    if (keyCode === LEFT_ARROW) {

       

        
      } else if (keyCode === RIGHT_ARROW) {
       
      }


}

