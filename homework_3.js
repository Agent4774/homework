'use strict';

let money            = +prompt("Your monthly budget?");
let time             = prompt("Type date in YYYY-MM-DD format");
let monthState       = prompt("This month state:");
let monthStatePrice  = +prompt("Month state expense:");
let optionalExpense1 = chooseOptExpenses();
let optionalExpense2 = chooseOptExpenses();
let optionalExpense3 = chooseOptExpenses();

let appData = {
    budget   : money,
    timedata : time,
    expenses : {
        monthState : monthStatePrice
    },
    optionalExpenses : {
        1 : optionalExpense1,
        2 : optionalExpense2,
        3 : optionalExpense3
    },
    income           : [],
    savings          : false
};

function detectDayBudget(totalBudget){
    return totalBudget / 30;
}

function chooseOptExpenses(){
    let optExpense = prompt("What's your optional expense?");
    return optExpense;
}

function detectLevel(budget){
    if (budget < 10000){
        return "Well-being level is lower than average";
    }else if(budget == 10000){
        return "Well-being level is average";
    }else{
        return "Well-being level is high";
    }
}



