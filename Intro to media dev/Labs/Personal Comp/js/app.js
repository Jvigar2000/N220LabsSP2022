// Jameson Vigar
// 1/19/22
// N220

// variable for timer
let t = 5;

// loop for pacman
let p = 30;

// string for continue 
let c  = 'Continue?';

// Function to create canvas
function setup(){
    createCanvas(800,600);

}




// Function to create shapes 
function draw(){
    //set background to black
    background(0);
    
    // text size for the timer
    textSize(50);
    text(t, 200, 300);
    text(c, 90, 180);


    // frame count is set at 60 to flash every second 
    if (frameCount % 60 == 0 && t > 0) { 
        t --;
    }

    // when the timer hits zero, Game Over will be displayed and continue will disappear
    if (t == 0) {
        text("GAME OVER", 55, 350);
        c = " ";
    }
    // frame count is lower so pacman will flash faster 
    if (frameCount % 10 == 0 && p > 0) { 
        p --;
        fill('yellow');
        // arcs used to form pacmans shape 
        arc(190,60,80,80, radians(30), radians(320));
        
    }

 
    //create blue outline on rectangles 
    stroke('blue');
    //strokeWeight(10);

    //fill rectangles black
    fill('black');
    //top rectangle length of screen
    rect(5, 5 , 800 , 10, 20);
    
    // lower rectangle left
    rect(5, 105 , 400 , 10, 20);

    //lower rectangle right
    rect(530, 105 , 400 , 10, 20);

    // vertical rectangle right
    rect(400, 105 , 10 , 800, 20);

    // vertical rectangle left
    rect(525, 105 , 10 , 800, 20);

    //no stroke cancels the blue stroke created above 
    noStroke();

    //fill yellow to resemble pac man 
    fill('yellow');

    // used radians to create a mouth for pac man 
    //arc(190,60,80,80, radians(30), radians(320));

    //fill circles white 
    fill('white');

    // each circle is 45 apart 
    // I was going to create a loop so i did not have 
    // to duplicate manually but i couldn't figure it out
    circle(245,55,15);

    circle(290,55,15);

    circle(335,55,15);

    circle(380,55,15);

    circle(425,55,15);

    circle(470,55,15);

    circle(470,100,15);

    circle(470,145,15);
   
    circle(470,190,15);

    circle(470,235,15);

    circle(470,280,15);

    circle(470,325,15);

    circle(470,370,15);

    circle(470,415,15);

    circle(470,460,15);
    
    circle(470,505,15);

    circle(470,550,15);
   
    

}




