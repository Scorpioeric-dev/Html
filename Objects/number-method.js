let num = 120.166;

// console.log(num.toFixed(2))

// console.log(Math.round(num))
//120
// console.log(Math.floor(num))
//120

// console.log(Math.ceil(num))
//121
let min = 0;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// 10-20
// console.log(randomNum);

// Challenge guess random
// 1-5 - true if correct - false if not correct

makeGuess = (guess) => {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guess === randomNum
};

// console.log(makeGuess(2));
