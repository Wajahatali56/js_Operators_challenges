
/* Challenge # 1 : 
why doesn't this code work ? Try to make it work and
guess what the result will be ? 

const numvariable = 0;
numvariable++;
numvariable++;
numvariable++;
console.log(numvariable);
     
*/
// The main problem in "const" because you don't ++ in case of this const we use "let" for these purposes
let numvariable = 0;
numvariable;
0
numvariable++;
0
numvariable;
1
numvariable++;
1
numvariable;
2
numvariable++;
2
numvariable;
3
console.log(numvariable);
