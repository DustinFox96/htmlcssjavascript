class saving {
    constructor(id, desctipion, balance) {
        this.id = id;
        this.desctipion = desctipion;
        this.balance = 0;
    }

     deposit(amt) {
         if(typeof amt !== "number") {
             console.error("Amount is not a number")
         }
         if(amt <= 0) {
             console.error("ammount must be gt zero")
             return false;
         }
        this.balance += amt;
        return true;
    }

     withdraw(amt) {
        if(typeof amt !== "number") {
            console.error("Amount is not a number")
            return false;
        }

         if(amt <= 0){
             console.error("Ammount must be gt zero");
             return false;
         }

         if(amt > this.balance) {
             console.error("no money for you");
             return false
         }
        this.balance -= amt;
        return true
    } 

    transfer(amt, toAcct) {
        if(this.withdraw(amt)) {
            toAcct.deposit(amt)
            return true;
        }
        return false;
    }
    
    showBalance() {
         return `${this.id}, ${this.desctipion}, ${this.balance}`;
     }
}

let acc1 = new saving(1, "savings")

acc1.deposit(100);
acc1.withdraw(50);
console.log(acc1.showBalance());


let acc2 = new saving(2, "savings")
acc2.deposit(100);
acc2.withdraw(25);
console.log(acc2.showBalance());

acc1.transfer(5, acc2);
console.log("acc1 bal is", acc1.showBalance());
