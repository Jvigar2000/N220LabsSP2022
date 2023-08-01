// Jameson Vigar
// 08/01/23
// N220
// "its just average"



function average(){

    // get user input 
    input = document.getElementById("numbers").value;

    // split the numbers input after each comma 
    list = input.split(", ");

    // array 
    array = [];

    // base sum is 0
    sum = 0;

    
    for(i = 0; i < list.length; i++){

        // add the numbers to array 
        array[i] = parseInt(list[i]);

        sum = sum + array[i];
    }

    // calculate average
    avg = sum/ array.length;

    // display answers to user 
    document.getElementById("av").innerHTML = "The average is "+ avg;
    document.getElementById("sm").innerHTML = "The sum is "+ sum;

    // reset text box 
    getValue= document.getElementById("numbers");

    // if text box has text, empty it 
        if (getValue.value !="") {
            getValue.value = "";
        }

}