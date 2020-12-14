let id=0;
   
const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    id += 1;
    return { id, amount, type }
  },

  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      return 'Bad amount';
    }
    const transaction = this.createTransaction(amount, 'deposit');
    this.transactions.push(transaction);

    this.balance += amount;
    
    return transaction;
  },

  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      return 'Bad amount';
    }

    if (amount > this.balance) {
      return 'Снятие такой суммы не возможно, недостаточно средств';
    } 
    const transaction = this.createTransaction(amount, 'withdraw');
    this.transactions.push(transaction);

    this.balance -= amount;

    return transaction;
  },

  getBalance() {
    return `Ваш баланс: ${this.balance}`
  },

  getTransactionDetails(id) {
    console.log(`Детали транзакции (id: ${id})`);
    return this.transactions[id-1]
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (type !== transaction.type) continue; 
      total+=transaction.amount;
     
    }
    return total;
  }
}


console.log(account.deposit(500));
console.log(account.withdraw(120))
console.log(account.deposit('xft'));
console.log(account.deposit(1200));
console.log(account.withdraw(590));
console.log(account.withdraw(1000));
console.log(account.getBalance());
console.log(account.withdraw(900));
console.log(account.deposit(500));
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(6));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
console.table(account.transactions);