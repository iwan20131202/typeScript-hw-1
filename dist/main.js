"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
// 2
let anything = -20;
anything = 'Text';
anything = {};
// 3
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
// 5
let person = ['Max', 21];
// 6
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus["LOADING"] = "LOADING";
    LoadingStatus["READY"] = "READY";
})(LoadingStatus || (LoadingStatus = {}));
let status = LoadingStatus.LOADING;
// 7
let value = 'text';
value = 42;
// 8
let mode = 'enable';
mode = 'disable';
// 9
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    },
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=main.js.map