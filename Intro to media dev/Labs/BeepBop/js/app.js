// Jameson Vigar 
// 2/22/22
// N220

// create new div
let newEl = document.createElement("div"); 

//set background 
newEl.style.backgroundColor = "#9da7cf";

//set width and height  
newEl.style.width = "40px";
newEl.style.height = "20px";

// append the element to the body
document.body.appendChild(newEl);

//test 
newEl.innerHTML = "test";



// initialize loop
for(x = 0; x < 25;  x++){
  
    if(x/3){

        // if x is divisilbe by 3 
        newEl.innerHTML = "beep";

    }
     else if(x/5){

        // if x is divisible by 5
        newEl.innerHTML = "bop ";

    } 
    else if(x/3 & x/5){

        // if x is divisible by 3 and 5 
        newEl.innerHTML = "BeepBop";
    }
   
    // test 
    console.log(x);

}