// Jameson Vigar
// 07/27/23
// N220
// "Is divisible by 7"


// function to determine divisiblity 
function isDivis(){
    
    // retrieves user input 
    let x = document.getElementById("number").value;

    
    // if it is divisible it will display that it is true 
    if(x % 7 == 0){

        document.getElementById("answer").innerHTML= x + "number is divisible by 7";

    }else{
        // if it is fale it will display that it is false
        document.getElementById("answer").innerHTML= x + " is not divisible by 7";
    }

}