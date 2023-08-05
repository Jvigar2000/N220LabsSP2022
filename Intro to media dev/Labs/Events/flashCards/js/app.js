// Jameson Vigar
// 08/04/23
// N220
// "Flash Cards"

function quiz(d){

    // gets the info based off the button clicked
    state = document.getElementById(d.id);

    // sets the answer to that off the button 
    ans = state.dataset.answer;

    //div = document.getElementById('answer');
    // inserts the answer into the div 
    document.getElementById('answer').innerHTML = "The capital is " + ans;
    
    // div.document.appendChild(ans);
    // document.body.appendChild(ans)
    // console.log(ans);

    






}