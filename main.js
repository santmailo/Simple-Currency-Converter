//Write your code here
const input = require('sync-input');

console.log("Welcome to Currency Converter!");
let currencys = {
    USD : 1.0,
    JPY : 113.5,
    EUR : 0.89,
    RUB : 74.36,
    GBP : 0.75
}

Object.keys(currencys).forEach((key) => {
    console.log(`1 USD equals ${currencys[key]} ${key}`)
});

let val = call();
check(val);
function check(val){
    if(val==1){
        convertVal();
    }
    else if(val==2){
        console.log("Have a nice day!");
    }
    else{
        console.log("Unknown input");
        val = call();
        check(val);
    }
}

function call(){
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    let user = input();
    return user;
}



function convertVal(){
    console.log("What do you want to convert?");
    let curr = input("From: ").toUpperCase();
    if(!Object.keys(currencys).includes(curr)){
        console.log("Unknown currency");
        convertVal();
        return;
    }

    let currExch = input("To: ").toUpperCase();

    if(!Object.keys(currencys).includes(currExch)){
        console.log("Unknown currency");
        convertVal();
        return;
    }

    let amount = input("Amount: ");
    if(isNaN(amount)){
        console.log("The amount has to be a number");
        convertVal();
        return;
    }

    amount = parseFloat(amount);
    if(amount<1){
        console.log("The amount cannot be less than 1");
        convertVal();
        return;
    }

    let convertedAmount = amount * ((1/currencys[curr]) * (currencys[currExch]/1));
    console.log(`Result: ${amount} ${curr} equals ${convertedAmount.toFixed(4)} ${currExch}`);
}
