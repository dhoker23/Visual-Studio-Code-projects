'use strict'
console.log(5);
console.log(5+5);
let a = 2;
console.log(a+5);

let n = 0X1231;
console.log(`у меня ${n} штук`);
n = -10;
console.log(n,typeof(n));
n = 1.123;
console.log(n,typeof(n));

n=34752347956237546295674567354244851244363457367256345736834238754627278325423452354234523234234n;
console.log(n,typeof(n));

n='слово';
console.log(n,typeof(n));
n="слооово";
console.log(n,typeof(n));

n=true;
console.log(n,typeof(n));

n=null;
console.log(n,typeof(n));

n=undefined;
console.log(n,typeof(n));
let b;
console.log(b,typeof(b));

n=Symbol();
console.log(n,typeof(n));
b=Symbol();
console.log(b,typeof(b));
console.log(b==n);

let car = {Model:"BMW",Serial:7};
console.log(car,typeof(car));
let arr = [1,2,3,true,5,"asfdfh",7];
console.log(arr,typeof(arr));
let foo = function(){};
console.log(foo,typeof(foo));
let regExp = /0/g;
console.log(regExp,typeof(regExp));
let err = new Error();
console.log(err,typeof(err));
let date = new Date();
console.log(date,typeof(date));
 
let lol = Boolean();
console.log(lol,typeof(lol));

// function checkAge(age) {
//     return (age>18?true:confirm('Родители разрешили?'));
// }
function checkAge(age) {
    return (age>18)||confirm('Родители разрешили?');
}
//alert(checkAge(15));
//alert(checkAge(0));
//alert(checkAge(19));

function min(a,b){
    return ((a<b) ? a: b);
}
//alert(min(2, 5)); проверка
//alert(min(3, -1));
//al13ert(min(1, 1));

let x = prompt("Введите x");
let k = prompt("Введите n");
function pow(x,k){
    let result =(k%1 !=0)? "неа": x**k;
    document.querySelector('.test').innerHTML = result;
}
pow(x,k);
