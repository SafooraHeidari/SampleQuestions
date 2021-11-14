// Write a JavaScript program to merge and sort two arrays of integers.
//      Input: [0, 4, 13, 6, 15] , [32, 45, 13, 7];
//      Output: 21;


const min = arr => {
    let minVal = Infinity;
    for (let i = 0; i < arr.length; i++){
        if (minVal > arr[i]) minVal = arr[i];
    }
    return minVal
}

const sortedMerge = (arr1, arr2) => {
    let myArr = [... arr1];
    for (let i = 0; i < arr2.length; i++){
        if (!myArr.includes(arr2[i])) myArr.push(arr2[i]);
    }
    let sortedArr = [];
    let m = myArr.length;
    for (let i = 0; i < m; i++){
        let minVal = min(myArr);
        let minIndex = myArr.indexOf(minVal);
        sortedArr.push(minVal);
        myArr.splice(minIndex,1);
    }
    return sortedArr
}


const arr1 = [0, 4, 13, 6, 15];
const arr2 = [32, 45, 13, 7];
console.log(sortedMerge(arr1, arr2))