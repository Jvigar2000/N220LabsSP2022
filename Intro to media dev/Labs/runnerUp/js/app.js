// Jameson Vigar
// 2/24/22
// N220

// create array
let bestTimes = ["3.2"," 6.4", "9.8"];
//create new divs 
let secondPl = document.createElement("div");
let thirdPl = document.createElement("div");
// set background colors 
secondPl.style.backgroundColor = "#9dc7c6";
thirdPl.style.backgroundColor = "#bd8555";
// set widths 
secondPl.style.width = "70px";
thirdPl.style.width = "70px";

//append elements 
document.body.appendChild(secondPl);
document.body.appendChild(thirdPl);

secondPl.innerHTML = (bestTimes[1]);
thirdPl.innerHTML = (bestTimes[2]);

