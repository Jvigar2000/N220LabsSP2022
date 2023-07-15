// Jameson Vigar
// 07/14/22
// N220
// "Peak Pixels"

// creation of intial div 
let div = document.createElement("div");
 div.style.width = "100px";
 div.style.height = "100px";
 // green background
 div.style.backgroundColor = "#008000";

 // add to body 
 document.body.appendChild(div);

    // initial width and height variables 
    let width = 100;
    let height = 100;

   // when clicked run this function
    div.onclick = function size(){
        
        // increase dimensions by 10%
        width = width * 1.1;
        height = height * 1.1;

        // implement dimension changes 
        div.style.width = width + 'px';
        div.style.height = height + 'px';

    }