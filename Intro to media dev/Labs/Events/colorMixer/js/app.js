// Jameson Vigar
// 08/04/23
// N220
// "Color Mixer"

r = 0;
b = 0;
g = 0;

function colorAdj(d){

 // get the color adjust ment code form the button
adj = document.getElementById(d.id);
// get the div 
div = document.getElementById("main");



console.log(adj);

// determine which color to alter 
if(adj === redOne){

    r = r + 1;
    div.style.backgroundColor = rgb(r,g,b);
    
}
else if(adj ===redFive){

    r = r + 5;
    div.style.backgroundColor = (r,g,b);

}
else if(adj ===redTen){

    r = r + 10;
    div.style.backgroundColor = (r,g,b);

}
else if(adj === blueOne){

    b = b + 1;
    div.style.backgroundColor = (r,g,b);

}
else if(adj === blueFive){

    b = b + 5;
    div.style.backgroundColor = (r,g,b);

}else if(adj === blueTen){

    b = b + 10;
    div.style.backgroundColor = (r,g,b);

}else if(adj === greenOne){

    g = g + 1;
    div.style.backgroundColor = (r,g,b);

}
else if(adj === greenFive){

    g = g + 5;
    div.style.backgroundColor = (r,g,b);

}else if(adj === greenTen){

    g = g + 10;
    div.style.backgroundColor = (r,g,b);

}

div.style.backgroundColor = (r,g,b);


}