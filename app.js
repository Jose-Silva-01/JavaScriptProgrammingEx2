/*
    JavaScript Programming Ex2 
    Strings and string functions
    Jose Silva
*/

let l = "~~~~~~~~~~~~~~~~~~";

let firstName = 'Jose';
let lastName = "Silva";
let age = 22;

console.log(l);

// Concatenation
let messageConcatenation = 'My name is ' + firstName + ' ' + lastName;
console.log(messageConcatenation);
console.log(l);

// String template/ Template Literals
// To be able to do a string concatenation similar to C# you need to use this `` quotes and put a dollar sign $
// and a {} to concatenate the infromation
let messageStringLiteral = `My name is ${firstName} ${lastName}.`;
console.log(messageConcatenation);
console.log(l);

// Escape & New Line
let a = "Add a new line \nThis is a new line";
console.log(a);
console.log(l);

// This is how we can use some special characters in JS, just put \ before it
let b = "I quoted the person as saying \"I love JavaScript\".";
console.log(b);
console.log(l);

let c = 'It\'s right over there.';
console.log(c);
console.log(l);

let d = 'I quoted the person as saying "I love JavaScript".';
console.log(d);
console.log(l);

console.log("String Functions");
let f = "abcdefg";
// Length of f
console.log(`length of f - ${f.length}`);
console.log(l);

// To uper
console.log(f.toUpperCase());
console.log(l);

// To lower is the same thing, the command is .toLowerCase()

// substr

let g = f.substr(2,4); // begins in, goes for more this # characters
console.log(g);
console.log(l);

// substring
let h = f.substring(3);
console.log(h);
console.log(l);