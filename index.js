// Your code here
function saturdayFun(str = 'roller-skate') {
    return 'This Saturday, I want to ' + str + '!';
};

let mondayWork = function (str = 'go to the office') {
    return 'This Monday, I will ' + str + '.';
};

let wrapAdjective = function (str = '*') {
    return function(adj = 'special') {
        return 'You are ' + str + adj + str + '!';
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};

let actionApplyer = function(int, arr) {
    let a = int;
    for (let i = 0; i < arr.length; i++) {
        a = arr[i](a)
    }
    return a;
}