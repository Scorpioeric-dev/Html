//multiple arguments

// let multiply = function(a,b){
//     return a * b
// }
// let result = multiply(10,9)
// console.log(result)


// //Default arguments

// let getScoreText = function(name = 'Anonymous',score = 0){
//    return ` Name:${name} Score:${score} `
// }
// let  scoreText = getScoreText('Andrew',450)
// console.log(scoreText)
//Challenge area

let getTip = function(total,tipPercent = .2){
  return total * tipPercent
}
let tip = getTip(187,.30)
console.log(tip)

// total, tipPercent .2