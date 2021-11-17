/*1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.*/

/*function getSquareNumber (num) {
    return num ** 2;
}

console.log(getSquareNumber(9));
*/

/*2.Сделайте функцию, которая возвращает сумму двух чисел.*/


/*let sum = (a , b) => a + b;

console.log(sum(5,9));
*/

/*3.Сделайте функцию, которая отнимает от первого числа второе и делит на третье.*/

/*function calculations (a, b, c) {
    return (a - b) / c;
}

console.log(calculations(20,5,3));
*/

/*4.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.*/
/*
 function getStringDay (number) {
    let dayArray = [
        "Понедельник", 
        "Вторник", 
        "Среда", 
        "Четверг", 
        "Пятница", 
        "Суббота", 
        "Воскресенье", 
    ];
    return dayArray [number - 1];

}

console.log(getStringDay(1));
*/

/*5.Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
/*
let isEqual = (a,b) => a===b;
console.log(isEqual( 2,3));
*/

/*6.Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.*/
/*
let checkSum = (a,b) => (a + b) > 10;

console.log(checkSum(5, 4));
*/


/*7.Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.*/
/*
let checkNum = (number) => number >= 0;
console.log(checkNum(4));
*/

/*8.Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.*/
/*
let isNumberInRange = (number) => number > 0 && number < 10 ;

console.log(isNumberInRange(12));
*/
/*9.Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных*/
/*
function rgb (a = 0, b = 0, c = 0 ) {
    return  `rgb(${a} ,${b} ,${c})`;
}

console.log(rgb( 255,123, 234));
*/
/*10.Написать функцию, которая принимает в себя три параметра - число и две функции. Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться, если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное, и будет возвращать число, увеличенное на 1.*/
/*
function getCallback (number, callback_1, callback_2) {
    if (number % 2===0) {
        if (callback_1 && typeof callback_1 === "function"){
            let a = number ** 2;
            return a;
        } 
    } else if (number % 2 != 0) {
        if (callback_2 && typeof callback_2 === "function")
             a = number + 1;
            return a;

    }
    
}

console.log(getCallback(20, ()=>{} , ()=>{}));
*/

/*11.Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз, сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2. 
*/
/*
function mult(num1 = 1, num2 = 1 , num3 = 2) {
    let result = 1;
    for (let i = 1; i <= num3; i++) {
        result = result * num1 * num2;
           
    }
    return result
}
console.log(mult(3,5,3));
*/


/*12.Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими 3 словами, расположенными в алфавитном порядке.*/
/*
let words = ["card", "alpha" , "space"];

function getWords (str) {
    str.sort();
    return str;
}

console.log(getWords(words));
*/

/*13.Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.*/
/*
let arr = [12, 3, 7, 9, 22, 15, 25, 1, 28, 10];
let newArr = arr.filter(item => item > 0 && item < 10);
console.log(newArr);
*/

/*14.Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.*/



/*function getDigitsSum (number) {
    let arr = Array.from(String(number)).map(i=>Number(i));
    let result = arr.reduce((sum, current) => sum + current, 0);
    return result;
}
/*console.log(getDigitsSum(123));*/


/*15.Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.*/
/*
let years = [];

for (let i = 1; i <= 2020; i++) {
    if(getDigitsSum(i) == 13){
        years.push(i)
    }
}
console.log(years);*/

/*16.Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.*/
/*
let isEven = (n) => n % 2 == 0;
console.log(isEven);*/


/*17.Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
*/
/*
let isEven = (n) => n % 2 == 0;
let arr = [10 , 12, 54, 32, 45, 87, 23, 11, 45, 2, 16];
let newArr = [];
for (let i = 0; i <= arr.length ; i++){
    if(isEven(i) == true) {
        newArr.push(i)
        
    }
}

console.log(newArr);
*/

/*18.Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число без остатка).*/
/*
function getDivisors (number) {
    let arr = [];
    for (let i = 0; i <= number; i++) {
        if (number % i == 0) {
            arr.push(i)
            
        }
    }
    return arr
}


console.log(getDivisors(24));
*/







