let first_number = prompt("Please type first number ");
console.log(`First number ${first_number}!`);
let operator = prompt("Please type operator ");
console.log(`Operator ${operator}!`);
let second_number = prompt("Please type second number ");
console.log(`Second number ${second_number}!`);
first_number = Number(first_number)
second_number = Number(second_number)
if(operator == "+") {
    console.log(`Result is ${first_number + second_number}!`);
}
else if(operator == "-") {
    console.log(`Result is ${first_number - second_number}!`);
}
else if(operator == "/") {
    console.log(`Result is ${first_number / second_number}!`);
}
else if(operator == "*") {
    console.log(`Result is ${first_number * second_number}!`);
}
