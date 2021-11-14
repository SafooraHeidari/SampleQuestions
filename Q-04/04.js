// Write a JavaScript function to get the number of occurrences of each letter in specified string.
//      Input: "hello world";
//      Output: {h:1, e:1, l:3, o:2, r:1, l:3, d:1};


function occurCount(str){
    str.toLowerCase();
    let myObj = {};
    for (let i = 0; i < str.length; i++){
        if (str[i] !== ' '){
            str[i] in myObj ? myObj[str[i]]++ : myObj[str[i]] = 1
        }
    }
    return myObj
}

console.log(occurCount("hello world"))