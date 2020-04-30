'use strict';
let money, time;

function start(){
    money = +prompt("Your monthly budget?");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Your monthly budget?");
    }
    time = prompt("Type date in YYYY-MM-DD format");
    while(time == "" || time == null){
        time = prompt("Type date in YYYY-MM-DD format");
    }
}
// start();

let appData = {
    budget           : money,
    timedata         : time,
    expenses         : {},
    optionalExpenses : {},
    income           : [],
    savings          : false,
    extraIncome      : [] 
};

function detectDayBudget(totalBudget){
    return (totalBudget / 30).toFixed();
}
// detectDayBudget(appData.budget)

function chooseOptExpenses(){
    for(let i = 0; i < 3; i++){
        let optExpense = prompt("What's your optional expense?");
        if (typeof(optExpense) === "string" && optExpense != "" && typeof(optExpense) != null && optExpense.length < 50){
            appData.optionalExpenses[i + 1] = optExpense;
        }else{
            i -= 1;
        }
    }
}
// chooseOptExpenses();

function detectLevel(budget){
    if(budget < 10000){
        return "Well-being level is lower than average";
    }else if(budget == 10000){
        return "Well-being level is average";
    }else{
        return "Well-being level is high";
    }
}
// detectLevel(appData.budget);

function chooseExpense(){
    for(let i = 0; i < 2; i++){
        let monthState       = prompt("This month state:");
        let monthStatePrice  = prompt("Month state expense:");
        if (typeof(monthState) === "string" && monthState != "" && monthStatePrice != "" && typeof(monthState) != null && typeof(monthStatePrice) != null && monthState.length < 50){
            appData.expenses[monthState] = monthStatePrice;
        }else{
            i -= 1;
        }
    }
}
// chooseExpense();

function checkSaving(){
    if(appData.savings){
        let save = +prompt("How much savings do you have?"),
            percent = +prompt("What's annual percentage of the depo?");
        appData.monthlyDepoIncome = save/100/12*percent;
        return appData.monthlyDepoIncome;
    }else{
        return "No savings";
    }
}
// checkSaving();

function extraIncome(){
    for(let i = 0; i < 3; i++){
        let extraIncome = prompt("What's your extra income?");
        while(typeof(extraIncome) === "string" && extraIncome == "" && extraIncome == null){
            extraIncome = prompt("What's your extra income?");
        }
        appData.extraIncome.push(extraIncome);
    }
}
// extraIncome();

// appData.extraIncome.forEach(function(item, index){
//     console.log("Extra income number " + (index + 1) + " is " + item.toLowerCase());
// });
// appData.extraIncome.forEach((item, index) => console.log("Extra income number " + (index + 1) + " is " + item.toLowerCase()));

// console.log("Our app has such items: ");
// for(let key in appData){
//     console.log(key);
// }


