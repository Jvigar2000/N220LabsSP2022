// Jameson Vigar
// 07/14/2023
// N220
// Thats a lot of Div's


// loop to create 100 divs 

for( i=0; i<100; i++) {

    //creating the div
    div = document.createElement("div");

    // setting the parameters given
    div.style.height = "20px";
    div.style.width = "20px";
    
    //set the float to left
    div.style.float="left";
    
    //using the math.floor to to get an exact integer
    // Multiplying by 256 because max+1 is needed to get the max result 
     r = Math.floor(Math.random() * 256);
     g = Math.floor(Math.random() * 256);
     b = Math.floor(Math.random() * 256);
    
    // combines the 3 random numbers to create a random backgrounf
    div.style.background="rgb(" + r + "," + g + "," + b + ")";
    
    // adds the div to the body
    document.body.appendChild(div);
}