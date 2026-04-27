export class AccountTS {
    accountid?:string;
    customerid:string;
    balance:number;

    constructor(customerid:string, balance:number, accountid?:string){
        this.customerid = customerid;
        this.balance = balance;
        this.accountid = accountid;
    }

    displayInfo():void{
        console.log(`Account ID: ${this.accountid}`);
        console.log(`Customer ID: ${this.customerid}`);
        console.log(`Balance: ${this.balance.toFixed(2)}`);
    }
   
}