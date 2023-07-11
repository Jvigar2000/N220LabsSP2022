// Jameson Vigar
//07/11/23
//N220
// "Neapolitan"

function setup(){

    // create canvas 
    createCanvas(700, 700);


}

// create array with neopolitan colors 
 let colors = [ '#FFC0CB' , '#FFFFFF' , '#C4A484' ];
 //let colors = [strawberry, vanilla, chocolate]

// let colors = [ (255,192,203), (255,255,255), (255,192,203)];

// set a static y variable
let y = 100;

function draw(){
    
    // loop runs until array length is met 
    for(i = 0; i < colors.length; i++  ){

        
        // move squares apart 
         let x = i*100;
    
         // fill square with color from array
         fill(colors[i]);
        
         // create square
         square(x, y, 100 );

         
        
         
         // console.log(colors[i]);

            
    }


}

