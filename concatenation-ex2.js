/*
    Jose Silva  
    Exercise 1 - Concatenation
    JS
*/
let dollarCAD = Intl.NumberFormat("en-US", {style: "currency",currency: "CAD",});
let firstName = "Jose";
let lastName = "Silva";
let age = 23;
let natalCity = "Brasilia";
let currentCity = "Moncton";
let areMaried = false;
let firstJob = "Unico Educacional";
let firstJobRate =dollarCAD.format(5);

text1 = "Hello, " + firstName +". You are " + age + " years old and were born in " +
        natalCity + ", and currently live in "+ currentCity + ". \n\nYour first job" +
        " was at "+ firstJob + " making " + firstJobRate+ "/hour. \n\n" + "I asked if you were" + 
        " married and you said " + areMaried + ".";

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(text1);

text2 = `Hello,  ${firstName}. You are ${age} years old and were born in ` +
        `${natalCity}, and currently live in ${currentCity}. \n\nYour first job` +
        ` was at ${firstJob} making ${firstJobRate}/hour. \n\nI asked if you were` + 
        ` married and you said ${areMaried}.`;
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(text2);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");    