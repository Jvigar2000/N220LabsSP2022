// Jameson Vigar
// 08/04/23
// N220
// "Color Changer"

// function to change the color
function changeColor(d){

            // identifies the div that was clicked 
            div = document.getElementById(d.id);
            // changes the color 
            div.style.backgroundColor = div.dataset.color;
        }