// Jameson Vigar
// 2/24/22
//N220

// create array 
let fave = ["cars", "cameras", "sleep", "video games", "music"];

//create div 
//let faveEl = document.createElement("div");

//set backgroundColor
//faveEl.style.backgroundColor = "#9da7cf";

//document.body.appendChild(faveEl);

//loop 
for(i = 0; i < fave.length; i++ ){
// display array to div
document.getElementById("favorites").innerHTML = (fave[i] + " is one of my favorite things");

//test 
console.log(fave[i]);

}

