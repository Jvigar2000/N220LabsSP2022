// Jameson Vigar
// 08/01/23
// N220
// "Make Divs"

// create divs 
function createDiv(){

// define object array 
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   // loops through each object in array 
   for(i = 0; i < objects.length; i ++){

    // create a div from each of the objects 
    div = document.createElement("div");

    // added text to see where my divs were, turns out this fixed my program too
    div.innerText = "where are my divs ";
    //div.setAttribute("color", objects[i].color);
    div.style.background = objects[i].color ;
    div.setAttribute('height', objects[i].height);
    div.setAttribute('width', objects[i].width);

    // add it to the body
    document.body.appendChild(div);
    
   }
}