'use strict';

let money           = prompt("Your monthly budget?");
let time            = prompt("Type date in YYYY-MM-DD format");
let monthState      = prompt("This month state:");
let monthStatePrice = prompt("Month state expense:");

let appData = {
    budget   : money,
    timedata : time,
    expenses : {
        monthState : monthStatePrice
    },
    optionalExpenses : {},
    income           : [],
    savings          : false
};

console.log(appData.budget);

alert(+money / 30);
// alert(+appData.budget / 30);


// num 
// str
// Symbol()
// null
// undefined
// boolean
// object

// console.log();

// Оператор || возвращает true, если хоть одно из заданых условий равно true. Оператор && возвращает true, если все условия равны true. 


