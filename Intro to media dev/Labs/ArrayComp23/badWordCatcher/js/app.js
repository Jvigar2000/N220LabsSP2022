// Jameson Vigar
// 08/01/23
// N220
// "Bad word Catcher"


 

function check(){

    // defining the badwords 
    badwords = ["clear", "water", "tires"];

    // get user input 
    input = document.getElementById("sentence").value;

    // add words to array
    inputArray = []; 
    inputArray = input.split(" ");

    // start tall at 0
    tally = 0;

    // loops though the bad word array 
    for(i = 0; i < badwords.length; i ++){

        // loops through inputs 
        for(x = 0; x < inputArray.length; x ++){

            // see if the inputs match a bad word
            if( badwords[i] == inputArray[x] ){

                // ups the tally if one does 
                tally ++;
            }

        }

    }
    
    // was stumped because i forgot a second equals lol     
    if (tally == 0){

         document.getElementById("bw").innerHTML = " There are no bad words ";
    } else {

        document.getElementById("bw").innerHTML = " Bad words found. There are " + tally ;

    }
        
        // reset text box 
        getValue= document.getElementById("sentence");
    
        // if text box has text, empty it 
            if (getValue.value !="") {
                getValue.value = "";
            }
}