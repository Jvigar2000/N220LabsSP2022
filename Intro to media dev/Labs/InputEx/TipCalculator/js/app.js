// Jameson Vigar
// 3/23/22
// N220

// get user input 
let cost = document.getElementById("cost");

// function to calculate total and tip
function calc(){

    // get the value of the input 
    let Cost = cost.value;
    // calc for a 20% tip
    let tip = Cost * .2;
    // add the tip to the Cost 
    let total = tip + Cost;

    // output the tip and the total 
    console.log("Tip: $ " + tip, "Total: $ " + total);
}