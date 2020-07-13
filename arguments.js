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
// A 255 tip on $40 looks like
let getTip = function(total,tipPercent = .2){
    let percent = tipPercent * 100
    let tip = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${tip}`
}
let tip = getTip(40,.25)
// console.log(tip)

// total, tipPercent .2