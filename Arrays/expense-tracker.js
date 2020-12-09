const account = {
  name: "Eric",
  expenses: [],
  addExpense: (description, amount) => {
    account.expenses.push({
      description: description,
      amount: amount,
    });
  },

  income: [],

  addIncome: (description, amount) => {
    account.income.push({
      description: description,
      amount: amount,
    });
  },

  getAccountSummary: () => {
    let total = 0;
    let totalIncome = 0;
    let accountBalance = 0;

    account.expenses.forEach((expense) => {
      total = total + expense.amount;
    });
    account.income.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    accountBalance = totalIncome - total
    return `${account.name} has $${total} in expenses. ${account.name} new balance is $${accountBalance}`;
  },
};

//expense  description of string -
// amount integer
//add expense - description,amount
//getAccountSummary  total up all expenses - eric has 120 in expenses.

//Add income Array for account
//AddIncome method - description-amount
//tweak getAccountSummary

account.addExpense("rent", 650);
account.addExpense("Car Insurance", 173);
account.addExpense("Revere", 50);
account.addExpense("Dog", 225);
account.addExpense("Misc", 200);
account.addExpense("Credit cards", 200);{/*Macy-BofA*/}

account.addIncome("Job", 2600);

console.log(account.getAccountSummary());
