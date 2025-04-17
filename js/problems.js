//Problem 1

let itemPrice = 10;
let quantity = 3;
let discount = 0.15;
let subtotal = itemPrice * quantity;
discount = subtotal * discount;
finalprice = subtotal - discount;
console.log("Subtotal: ", subtotal);
console.log("Discount: ", discount);
console.log("Final Price: ", finalprice);


//Problem 2

let tempInput = prompt("What is the Temperature outside?(Celsius)");
let fahrconv = (tempInput * 9/5) + 32;
console.log(tempInput + " Celsius is " + fahrconv + " fahrenheit");


//Problem 3

let num = 5;
let str = "10";
console.log("How does the number " + num + " and the string " + str + " interact with one another?")
console.log("Addition: " + (num + str));
console.log("Subtraction: " + (num - str));
console.log("Are they Equal?: " + (num == str));
console.log("Are they strictly Equal?: " + (num === str));


//Problem 4

let billAmount = 32.85;
let tipRate = 0.15;
let people = 2;
let tipAmount = billAmount * tipRate;
let totalBill = billAmount + tipAmount;
let perPerson = totalBill / people;
console.log("Tip: $", tipAmount);
console.log("Total: $", totalBill);
console.log("Each Person Pays: $", perPerson);


//Problem 5

let price = 15;
let taxRate = 0.07;
let rawTotal = price + (price * taxRate);
let roundTotal = rawTotal.toFixed(2);
console.log("Price: ", price);
console.log("Tax ", taxRate);
console.log("Total: ", roundTotal);


//Problem 6

let password = prompt("Enter a new Password");
if(password.length >= 6){
    console.log("This Password is Valid")
}
else{
    console.log("This Password is not Valid")
}