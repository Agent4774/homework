'use strict';
//TASK1
let button = document.getElementById("start");

let budgetValue           = document.getElementsByClassName("budget-value"),
    dayBudgetValue        = document.getElementsByClassName("daybudget-value"),
    levelValue            = document.getElementsByClassName("level-value"),
    expensesValue         = document.getElementsByClassName("expenses-valuee"),
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue           = document.getElementsByClassName("income-value"),
    monthSavingsValue     = document.getElementsByClassName("monthsavings-value"),
    yearSavingsValue      = document.getElementsByClassName("yearsavings-value");

let expensesItem = document.getElementsByClassName("expenses-item");

let buttons             = document.getElementsByTagName("button"),
    expensesItemBtn     = buttons[0],
    optionalExpensesBtn = buttons[1],
    countBudgetBtn      = buttons[2];

let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");

let chooseIncome  = document.querySelector(".choose-income"),
    savings       = document.querySelector("#savings"),
    chooseSum     = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue     = document.querySelector(".year-value"),
    monthValue    = document.querySelector(".month-value"),
    dayValue      = document.querySelector(".day-value");







