
/* 
What does "expression" evaluate to ? How could you write this in a single line of code ?

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2 ;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;
console.log(expression5);
*/

const expression1 = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305 );
undefined
console.log(expression1);
false


