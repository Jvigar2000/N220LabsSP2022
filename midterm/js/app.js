// Jameson Vigar
// N220
// Midterm Q1


// define array 
let values = [ "up", "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"];

// create new div 
let myDiv = document.createElement("div");
 myDiv.style.width = "200px";
 myDiv.style.height = "200px";
 myDiv.style.backgroundColor = "#9da7cf";    
 
 document.body.appendChild(myDiv);

// for loop that runs for the length of the array 
for(let i = 0; i < values.length; i++){
    

    myDiv.innerHTML = values[i] + " - ";
    
    console.log(i, values[i]);

}

