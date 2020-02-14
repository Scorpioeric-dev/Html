//students score, total possible score

let gradeCalc = function(score, total = 100){
let studentScore = (score/total)
return studentScore
}
let score1 = gradeCalc(45,50)
console.log(score1)

//15/20 -> 'You got a C (75%) !'
//A 90-100 , B 80-89 , C 70-79 , D 60-69 , F 0-59 