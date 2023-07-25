/*
What does "result" evalute to? 
const myobject = {
nestedobject1:{
price : 100,
qty : 5
},
nestedobject2:{
price : 150, 
qty : 2
}
};
const myarr = [myobject.nestedobject1 , myobject.nestedobject2];
const finalresult = (myarr[0].price * myarr[0].qty) > (myarr[1].price * myarr[1].qty); (500 > 300)



*/

const myobject = {
nestedobject1:{price : 100,qty : 5},
nestedobject2:{price : 150, qty : 2}};
const myarr = [myobject.nestedobject1 , myobject.nestedobject2];
const finalresult = (myarr[0].price * myarr[0].qty) > (myarr[1].price * myarr[1].qty);
finalresult;
true
console.log(finalresult);
true