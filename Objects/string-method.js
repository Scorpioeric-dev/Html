let name = "Eric Fonseca";
//length property
// console.log(name.length);//12
// console.log(name)

//convert to upper case
console.log(name.toUpperCase())
//convert to lower case
console.log(name.toLowerCase())

//Include method
let password = "123456789abc";
// console.log(password.includes("abcd")); //false
//returns boolean of false or true

// Trim
// console.log(name.trim())

//Is valid password
// length is more than 8 - and it doesn't contain the word password
// let password = "jeremy";
isValidPasssword = (password) => {
  return password.length > 8 && password.includes("password");
};

console.log(isValidPasssword("ddddt")); //false

console.log(isValidPasssword("asldfsdfsaklhflkshd")); //false


console.log(isValidPasssword("kbsdkbaskdfbspassword")); //true
