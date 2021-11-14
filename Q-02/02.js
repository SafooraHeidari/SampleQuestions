// Write a JavaScript program to compute the sum of an array of integers.
//      Input: [1, 2, 3, 4, 5, 6];
//      Output: 21;


const sum = myArr => {
    let sumVal = 0;
    for (let i = 0; i < myArr.length; i++){
        sumVal += myArr[i];
    }
    return sumVal
}

const myArr = [1, 2, 3, 4, 5, 6, 7];
console.log(sum(myArr))