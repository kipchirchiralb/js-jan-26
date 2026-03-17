// Function  -  a RE-USABLE block {} of code that performs a specific task
// some functions require input(arguments/parameters)

function checkAge(year) {
  let age = 2026 - year;

  if (age >= 18) {
    console.log("Welcome to EABL");
    return true;
  } else {
    console.log("You are not allowed to this website!");
    return false;
  }
}

// calling/invoking the function
checkAge(2010);
checkAge(1990);
checkAge(2005);
console.log(checkAge(2022));

// write a function that checks if a input/given number  is divisible by 5
function checkNumberIsDivisibleBy5(number) {
  let remainder = number % 5;

  if (remainder === 0) {
    console.log("The  number is divisible by five");
  } else {
    console.log("Not divisible by 5");
  }
}
checkNumberIsDivisibleBy5(20);
checkNumberIsDivisibleBy5(17);
checkNumberIsDivisibleBy5(34);
checkNumberIsDivisibleBy5(2009050);

// == comparison -- allows for type coersion
// console.log(6 === "6");

// return value --- the output/result of a function

function multiplyNumbers(first, second, third) {
  return first * second * third;
}
// the return values stores the results in the function call(like variables)

console.log(multiplyNumbers(2, 2, 2));

// the return statement/keywork terminates a function


// write a function that takes in a number , returns true is a number if even and false if a number os odd

// write a function that takes a string and returns the number of characters in the string

// write a function that takes an array of numbers as input, uses a for loop to calculate the average of the numbers in the array 

// arrays and string , object