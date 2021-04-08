'use strict'


let isNumber = function() {
    // let userNumber = +prompt('Угадай число от 1 до 100');
    let isItNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    };
    const start = function() {
        let userNumber = prompt('Угадай число от 1 до 100');
        if (!isItNumber(userNumber) && userNumber != null) {
            alert('Введи число!')
            start();
        }
        if (userNumber === null) {
            return alert('Игра окончена');
        }
        return userNumber;
    };

    let userNumber = start();
    let num = 78;

    let guesNumber = function() {

        if (userNumber == num) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (userNumber > num) {
            alert('Загаданное число меньше');
            isNumber();
        } else if (userNumber < num) {
            alert('Загаданное число больше');
            isNumber();
        }
    }
    return guesNumber();
}

isNumber();