"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    console.log('test');
    //throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
