let myAccount = {
  name: "Eric ",
  expenses: 0,
  income: 0,
};

// let otherAccount = myAccount;
// otherAccount.income = 2000;

let addExpense = (account, amount) => {
  account.expenses = account.expenses + amount;
  // console.log(account);
};
// addExpense(myAccount, 2.5);



//addIncome
let addIncome = (account, income) => {
  account.income = account.income + income;
  
};
addIncome(myAccount, 2000);
//Reset Income
let resetAccount = (account) => {
  account.expenses = 0
  account.income = 0
};
//Account Summary
let getAccountSummary = (account) => {
  let balance =  account.income - account.expenses 
  return `Account for ${account.name} has $${balance}. $${account.income} in income $${account.expenses} in expenses.`
};

addIncome(myAccount,3000)
addExpense(myAccount,500)
addExpense(myAccount,750)
console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))