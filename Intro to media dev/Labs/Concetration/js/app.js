// Jameson Vigar
// 08/08/23
// N220
// Concentration

// reset button 
function reset(){

    // resets page 
    location.reload()


}


function Match(element, value){

    if(value){

    // when clicked the number will be shown on the box, this also adds a new element with the value 
    element.innerHTML = '<span class="boxValue" value=' +value+ '>' +value+ '<span>';
    
    // gets the value of the box clicked
    boxes = document.getElementsByClassName('boxValue');

     //console.log( boxes );

     // if two boxes have been clicked 
    if(boxes.length == 2){
    
     // clicked box 1 and clicked box two are equal
    if(parseInt(boxes[0].innerText) == parseInt(boxes[1].innerText)){
    
     // time out function begins 
    setTimeout(function(){
    
   
    while(boxes.length > 0) {
        // removes the mtached boxes  
    boxes[0].parentNode.remove();
    
    }
    
    }, 1000);
    
    }else{
    
        
    setTimeout(function(){
    
    while(boxes.length > 0) {
    
        // removes the numbers  
        boxes[0].parentNode.removeChild(boxes[0]);
   
    }
    
    }, 1000);
    
             }
    
         }
    
      }
    
  }

