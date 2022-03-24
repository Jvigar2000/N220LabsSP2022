let word = "Potato";
// let char = word[1];
let char  = " ";



for(i = 0; i < word.length ; i++){

    if(word[i] != "a"){

       char = char + word[i];

    }else if(word[i] != "o"){

        char = char + word[i];

    }else if(word[i] != "u"){

        char = char + word[i];

    }else if(word[i] != "i"){

        char = char + word[i];

    }
}

console.log(char)