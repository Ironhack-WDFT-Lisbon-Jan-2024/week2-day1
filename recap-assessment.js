/* JS FOUNDATIONS ASSESSMENT LAST EXERCISE */

let words = ["house", "house", "jackson", "jackson", "bruce"];

function findUnique(wordsArr){
    for (let i = 0; i<wordsArr.length; i++){
       if(wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])){
            return console.log(wordsArr[i]);
       }
    }
}

findUnique(words);
