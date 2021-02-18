const input = require('readline-sync');
let str = "LaunchCode";

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strgLength = Number(str.length)
let suffix = (str.slice(0,3));
let prefix = (str.slice(3,strgLength));
let newStr = prefix + suffix;

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str} becomes ${newStr} after the system updates!`);
console.log("\n");

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let strMoveNumber = input.question("Number of characters to move to the end: ");
strMoveNumber = Number(strMoveNumber);

if (strMoveNumber < str.lenght){
  suffix = (str.slice(0,strMoveNumber));
prefix = (str.slice(strMoveNumber,strgLength));
newStr = prefix + suffix;
console.log(`${str} becomes ${newStr} after the system updates!`);
} else{
  suffix = (str.slice(0,3));
prefix = (str.slice(3,strgLength));
newStr = prefix + suffix;
console.log(`${str} becomes ${newStr} after the system updates!`);
}


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

