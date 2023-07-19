// Jameson Vigar
// N220
// 07/18/23
// "Animated Objects with an 'S' "

function setup() {
    // create canvas
  createCanvas(400, 400);
  
  // create objects
  object1 = {
    x: 50,
    y: 100,
    d: 10
  };

  object2 = {
    x: 100,
    y: 100,
    d: 20
  };

  object3 = {
    x: 150,
    y: 100,
    d: 30
  };

  object4 = {
    x: 200,
    y: 100,
    d: 40
  };

   

}



function draw() {
    // no background again because of the cooler effect 
   // background(220);

   // create of shape array 
    let shapes = [object1, object2, object3, object4];
 
  // for loop to run for the whole length of array
  for(i = 0; i < shapes.length; i++){

    // changes position by 1 for each iteration
   shapes[i].x = shapes[i].x +1;
   shapes[i].y = shapes[i].y +1;

   // add new properties 
    circle(shapes[i].x, shapes[i].y, shapes[i].d);

  }



}