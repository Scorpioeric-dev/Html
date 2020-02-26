//students score, total possible score

let gradeCalc = function(score, totalScore) {
  let studentScore = (score / totalScore) * 100;
  let letterGrade = "";
  if (studentScore >= 90) {
    letterGrade = "A";
  } else if (studentScore >= 80) {
    letterGrade = "B";
  } else if (studentScore >= 70) {
    letterGrade = "C";
  } else if (studentScore >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You got a ${letterGrade} ${studentScore} `;
};
let score1 = gradeCalc(40, 50);
console.log(score1);

//15/20 -> 'You got a C (75%) !'
//A 90-100 , B 80-89 , C 70-79 , D 60-69 , F 0-59
