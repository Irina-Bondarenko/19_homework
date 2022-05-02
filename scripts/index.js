"use strict";

// HOMEWORK #19

function mainFunction (callback) {
    let num1 = +prompt("Введите первое число");
    let num2 = +prompt("Введите второе число");
    callback (num1, num2);
}

function exponentiationFunction (number1, number2) {
    let number3 = number1 ** number2;
    alert(number3);
}

mainFunction(exponentiationFunction);


/////////////

// MULTIPLY

function mainFunction2 (callback) {
    let num1 = +prompt("Введите первое число");
    let num2 = +prompt("Введите второе число");
    callback (num1, num2);

}

function exponentiationMultiply (number1, number2) {
    let number3 = number1 * number2;
    alert(number3);
}

mainFunction2(exponentiationMultiply);

// DIVISION

function mainFunction3 (callback) {
    let num1 = +prompt("Введите первое число");
    let num2 = +prompt("Введите второе число");
    callback (num1, num2);

}

function exponentiationDivision (number1, number2) {
    let number3 = number1 / number2;
    alert(number3);
}

mainFunction3(exponentiationDivision);

// MODULO

function mainFunction4 (callback) {
    let num1 = +prompt("Введите первое число");
    let num2 = +prompt("Введите второе число");
    callback (num1, num2);

}

function exponentiationModulo (number1, number2) {
    let number3 = number1 % number2;
    alert(number3);
}

mainFunction4(exponentiationModulo);