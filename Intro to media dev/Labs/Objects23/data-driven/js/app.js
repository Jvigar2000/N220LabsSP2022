// Jameson Vigar
// N220
// 07 / 17 / 23
// "Data Driven "

function setup() {

    // create canvas
    createCanvas(600, 600);
    
    // creating object 
    object = {
      width: 150,
      height: 150,
      color: 'blue',
      // x and y found the middle of screen through trial and error 
      x: 225,
      y: 225
    };
  }

  function draw() {
    // set background to black 
    background(0);
    
    // using the object to fulfill properties 
    fill(object.color);
    rect(object.x, object.y, object.width, object.height);
  }