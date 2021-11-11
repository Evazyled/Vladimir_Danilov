/*let a = -3;
if (a === 0) {
    console.log("Верно");
}else {
    console.log("Неверно");
}

let a = 0;
if (a > 0) {
    console.log("Верно");
}else {
    console.log("Неверно");
}

let a = -3;
if (a < 0) {
    console.log("Верно");
}else {
    console.log("Неверно");
}

let a = -3;
if (a > 0 || a === 0) {
    console.log("Верно");
}else {
    console.log("Неверно");
}


let a = -3;
if (a < 0 || a === 0) {
    console.log("Верно");
}else {
    console.log("Неверно");
}


let a = 1;
if (a != 0){
    console.log("Верно");
}else {
    console.log("Неверно");
}

let a = "тест";
if (a == 3) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let a = 3;
if (a === "1" ) {
    console.log("Верно");
}else {
    console.log("Неверно");
}

let test = false;
if (test == true) {
    console.log("Верно");
}else {
    console.log("Неверно");
}

let test = false ? console.log("Верно") : console.log("Неверно");


let test = false;
if (test != true) {
    console.log("Верно");
}else {
    console.log("Неверно");
}

let test =! true ? console.log("Верно") : console.log("Неверно");


let a = 0;
if (a > 0 && a < 5) {
    console.log("Верно");
}else {
    console.log("Неверно");
}

let a = -3 ;
if (a == 0 || a == 2) {
    a += 7
    console.log(a);
} else {
    a /= 10
    console.log(a)
}

let a = 3;
let b = 5;
if (a <= 1 &&  b >= 3) {
    let result = a + b;
    console.log(result);
} else {
    let result = a - b;
    console.log(result);
}

let a = 12; 
let b = 15;
if (a > 2 && a < 11 || b >= 6 && b < 14){
    console.log("Верно");
}else {
    console.log("Неверно");
}
*/

/*switch*/
/*let num = 4;
let result;
switch (num) {
  case 1:
    result = "зима";
    console.log(result);
    break;

  case 2:
     result = "весна";
    console.log(result);
    break;

  case 3:
     result = "лето";
    console.log(result);
    break;

  case 4:
     result = "осень";
    console.log(result);
    break;
   
   default:
    result = "Нет никаких значений";
    console.log(result);
    break;
}


let day = 12;
if (day >= 1 && day < 11) {
    console.log("Первая декада");
} else if (day >= 11 && day < 21) {
    console.log("Вторая декада");
}else if (day >= 21 && day <= 31) {
    console.log("Третья декада");
} else {
    console.log("Введите число от 1 до 31");
}


let month = 12;

if (month <= 2 ||  month == 12) {
    console.log("Зима");
} else  if (month >= 3 && month <= 5) {
    console.log("Весна");
} else if (month >=6 && month <= 8) {
    console.log("Лето");
} else if (month >= 9 && month < 12) {
    console.log("Осень");
} else {
    console.log("Введите число от 1 до 12");
}

let i = 0;
for (; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Bazz");
  } else {
    console.log(i);
  }
}



let str = 'abcde';
if (str.includes("a", 0)) {
    console.log("да");
}else {
    console.log('нет');
}


let str = 'abcde';
if (str.includes("a", 0)) {
    console.log("да");
}else {
    console.log('нет');
}
*/
/*Циклы while и for*/
 
/*for (let i = 1; i <= 100; i++){
    console.log(i);
}*/

/*for (let i = 11 ; i <= 33; i++){
    console.log(i);
}*/

/*for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}
*/

/*let sum = 0;

for (let i = 1; i <=100; i++){
    sum = sum + i;
}

console.log( sum)
*/
/*factorial*/
/*
let n = prompt("Введите число");
let result = 1;
for (; n > 0; n--){
    result = result * n;
}
alert(result);
*/

/*let n = 5;
let result = n;
for (let i = 0; i < 8; i++){
    result = result + "5"; 
}
console.log(result)
*/



for ( let i = 0; i <= 300; i++){
    let zero = 0;
    if( i == zero ){
        console.log(i + "  " + "Zero");
    } else if ( (i % 2) > 0 && i % 3 ==0){
        console.log( i + "  " + "Hola");
    } else if ( (i % 2 == 0) && ( i % 12 ==0 ) && i != 48 ){
        console.log( i + "  " +  "Ooops");
    }
}


