/*1. Удаление указанного количества символов из строки
Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.*/
/*
let str = 'Каждый охотник желает знать';

function delete_characters(str,length){
    return str.slice(0, length);
}
console.log(delete_characters(str, 5));*/

/*2. Вставить тире между словами строки
Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
*/
/*
let str = "HTML JavaScript PHP";

function insert_dash(str) {
    return str.toUpperCase().split(' ').join('-'); 
      
}
console.log(insert_dash(str));
*/

/*3. Сделать первую букву строки прописной
Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
*/
/*
let str = "string not starting with capital";

function cursive_letter(str) {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(cursive_letter(str));
*/

/*4. Первая буква каждого слова заглавная
Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.*/
/*
let str = "каждый охотник желает знать";

function capitalize (str) {
    let arr =  str.split(' ');
    for (let  i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    let result = arr.join(' ')
    return result
    
}

console.log(capitalize(str));
*/

/*5. Смена регистра символов строки
Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».*/
/*
let  str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь"; 

function change_register(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] == str[i].toUpperCase()){
            newStr += str[i].toLowerCase()
        }else {
            newStr += str[i].toUpperCase()
        }
        
    }
    return newStr
}

console.log(change_register(str));
*/

/*6. Удалить все не буквенно-цифровые символы
Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
*/
/*
let str = "every., -/ hunter #! wishes ;:  {} to $ % ^ & * know";  

function remove_char(str) {
    let res = "";
    res = str.replace(/[^\w\s]|_/g, "")
           .replace(/\s+/g, " ");
    return res;      
 }
console.log(remove_char(str));
*/

/*8. Сравнение строк без учёта регистра
Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
*/
/*
let comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase()

console.log(comparison("qwer","Wer"));
*/

/*9. Поиск без учета регистра
Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.
*/
/*
let a = 'Widget with id';
let b = "with"
function insensitive_search(str1, str2) {
    
      return str1.toLowerCase().indexOf(str2.toLowerCase())
}

console.log(insensitive_search(a,b));
*/

/*
12. Повторить строку n раз
Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.
*/
/*
function repeatStr(str, n) { 
    return str.repeat(n)
};

console.log(repeatStr("qwertt" ,3 ))
*/
/*14. Заканчивается ли строка символами другой строки
Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
*/
/*
let s = "Каждый охотник желает знать"; 
let s1 = "скрипт";
let s2 = "знать";

let String = {
    endWith  : function (str1, str2) {
        return str1.endsWith(str2)
    }
}

console.log(String.endWith(s, s1))
*/

/*16. Вставить подстроку в указанную позицию строки
Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.*/
/*
let str = "Каждый охотник желает знать"; 
let substr = ", где сидит фазан";

function insert(str, substr, pos) {
    let arr = str.split(' ');
    arr.splice(pos,0, substr)
    return arr.join(' ')
    
};

console.log(insert(str,substr,str.length))
*/

/*17. Ограничить длину строки
Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.*/
/*
let str = "Каждый охотник желает знать";

function limitStr(str, n, symb) {
    if (!n && !symb) return str;
    symb = symb || "..."
    return str.substr(0, n - symb.length) + symb;
}

console.log(limitStr(str,17));
*/

/*24. Преобразовать строку в массив слов

Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
*/
/*
var str = 'Каждый охотник желает знать';
function stringToarray(str) {

    return str.split(" ")
}

console.log(stringToarray(str));
*/

