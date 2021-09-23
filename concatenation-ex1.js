/*
    Jose Silva  
    Exercise 1 - Concatenation
    JS
*/
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('original text');
console.log('Web and Mobile Application development was the program Fred entered in the Fall of 2019.');
console.log('Intro to Programming is going to be the course Fred likes best. Fred is going to study very hard.');
console.log('Each night Fred is going to spend time reviewing all of the course material.');
console.log('Fred will be committed to learning as much as possible about C# in 2019!');


let text1 = 'Web and Mobile Application development was the program Fred entered in the Fall of 2019. \n' + 
            'Intro to Programming is going to be the course Fred likes best. Fred is going to study very hard. \n'+ 
            'Each night Fred is going to spend time reviewing all of the course material. \n' + 
            'Fred will be committed to learning as much as possible about C# in 2019!';

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('1 - ')
console.log(text1);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('2 - ')   
let text2 = 'Web and Mobile Application development was the program ' + nameFred  + ' entered in the Fall of 2019. \n' + 
            'Intro to Programming is going to be the course ' + nameFred  + ' likes best. ' + nameFred  + ' is going to study very hard. \n'+ 
            'Each night ' + nameFred  + ' is going to spend time reviewing all of the course material. \n' + 
            '' + nameFred  + ' will be committed to learning as much as possible about C# in 2019!';
console.log(text2)

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('3 - ')
let nameFred = 'Fred';
let text3 = `Web and Mobile Application development was the program ${nameFred} entered in the Fall of 2019. \n` + 
            `Intro to Programming is going to be the course ${nameFred} likes best. ${nameFred} is going to study very hard. \n`+ 
            `Each night ${nameFred} is going to spend time reviewing all of the course material. \n`+ 
            `${nameFred} will be committed to learning as much as possible about C# in 2019!`;

console.log(text3);

