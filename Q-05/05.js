// Write a JavaScript program which returns a subset of a string.
//      Input: "dog";
//      Output: ["d", "do", "dog", "o", "og", "g"];


function findSubset(str){
    let subset = [];
    for (let m = 0; m < str.length; m++)
    {
        for (let n = m+1; n < str.length+1; n++)
        {
            subset.push(str.slice(m,n));
        }
    }
    return subset;
}


console.log(findSubset('dog'));