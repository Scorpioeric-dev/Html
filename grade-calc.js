//students score, total possible score
const gradeCalc = function(score, totalScore) {
  const studentScore = (score / totalScore) * 100;
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
  return `You got a ${letterGrade} ${studentScore}% `;
};
let score1 = gradeCalc(30, 50);
// console.log(score1);

//15/20 -> 'You got a C (75%) !'
//A 90-100 , B 80-89 , C 70-79 , D 60-69 , F 0-59
