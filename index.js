const readlineSync= require('readline-sync')

console.log('Welcome to the Quiz');
let username = readlineSync.question("What's your Name: ");
console.log('Hello',username,", Let's Play the Quiz!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',username + ', There are 10 Questions on India and all are Compulsory.');
console.log('2. You will get 1 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('all the best!!!!')
console.log('\n');