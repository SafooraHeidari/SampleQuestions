// Write a JavaScript function that reverse a number.
//      Input: 34785;
//      Output: 58743;


function reverseNum(num){
    let myStr = num.toString();
    let myArr = myStr.split('');
    let m = myArr.length;
    let reverseArr = [];
    for (let i = m-1; i >= 0; i--){
        reverseArr.push(myArr[i]);
    }
    return Number(reverseArr.join(''))
}


console.log(reverseNum(34785))