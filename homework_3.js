'use strict';

let money            = prompt("Your monthly budget?");
let time             = prompt("Type date in YYYY-MM-DD format");

let appData = {
    budget   : money,
    timedata : time,
    expenses : {},
    optionalExpenses : {},
    income           : [],
    savings          : false
};

function detectDayBudget(totalBudget){
    return totalBudget / 30;
}

function chooseOptExpenses(){
    for(let i = 1; i < 4; i++){
        let optExpense = prompt("What's your optional expense?");
        if (typeof(optExpense) === "string" && monthState != "" && typeof(monthState) != null && optExpense.length < 50){
            appData.optionalExpenses[i] = optExpense;
        }else{
            optExpense = prompt("What's your optional expense?");
        }
    }
}

function detectLevel(budget){
    if(budget < 10000){
        return "Well-being level is lower than average";
    }else if(budget == 10000){
        return "Well-being level is average";
    }else{
        return "Well-being level is high";
    }
}

for(let i = 0; i < 2; i++){
    let monthState       = prompt("This month state:");
    let monthStatePrice  = prompt("Month state expense:");
    if (typeof(monthState) === "string" && monthState != "" && monthStatePrice != "" && typeof(monthState) != null && typeof(monthStatePrice) != null && monthState.length < 50){
        appData.expenses[monthState] = monthStatePrice;
    }else{
        monthState       = prompt("This month state:");
        monthStatePrice  = prompt("Month state expense:");
    }
}

// console.log(appData);