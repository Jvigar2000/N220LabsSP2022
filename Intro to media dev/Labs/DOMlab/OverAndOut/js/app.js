// Jameson Vigar
// 07/14/22
// N220
// "Over and Out"

// create div 
let div = document.createElement("div");
 div.style.width = "100px";
 div.style.height = "100px";
 //div.style.backgroundColor = "#00FFFF";

 // add div to body
 document.body.appendChild(div);


 //div = document.getElementById(myDiv);

 // when mouse is over the div, run this function and make the color black
 div.onmouseover = function Over(){
   // d
   
   // changes background to black
   div.style.backgroundColor = "#000000";

   // add to body
   document.body.appendChild(div);

 }

 // when mouse is no longer over the div change the backgound back to blue 
 div.onmouseout = function Out(){
    
    //div = document.getElementById(myDiv);
    div.style.backgroundColor = "#00FFFF";
    document.body.appendChild(div);

 }