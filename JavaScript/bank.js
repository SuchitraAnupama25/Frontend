function createBankAccount(initialBalance){
    let balance = initialBalance;
    let deposit = function(amount){
        balance += amount;
        console.log(`Balance: ${balance}`);
    };
    let withdraw = function(amount){
        balance -= amount;
        console.log(`Balance: ${balance}`);
    };
    return {deposit,withdraw};
}
const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log(account.balance);