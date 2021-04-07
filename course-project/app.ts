let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  console.log('test');
  //throw { message: message, errorCode: code };
}

generateError('An error occurred', 500);
