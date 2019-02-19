let numberButtons = document.querySelectorAll('.numbers');
let display = document.querySelector('.display');
let operatorButtons = document.querySelectorAll('.operators');
let equalsButton = document.querySelector('.equals');
let clearButton = document.querySelector('.clear');
let delButton = document.querySelector('.del');
let decimalButton = document.querySelector('.decimal');
let numbers = [];
let operators = [];
let result = 0;


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.textContent += button.textContent;
    if (button.textContent === '0' && operators[operators.length - 1] === '/') {
      alert('Nice try! You can\'t divide by zero. Fix your mistake!');
    }
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (display.textContent !== '') {
      numbers.push(parseFloat(display.textContent));
      display.textContent = '';
      operators.push(button.textContent);
    }
  });
});

equalsButton.addEventListener('click', () => {
  if (display.textContent !== '') {
    numbers.push(parseFloat(display.textContent));
  }
  if (numbers.length >= 2 && operators.length === numbers.length - 1) {
    display.textContent = '';
    result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      result = operate(operators[i - 1], result, numbers[i]);
    }
    if (result.toString().match(/\.\d{4,}/)) {
      result = result.toFixed(4);
    }
    display.textContent = result;
    numbers = [];
    operators = [];
  }
});

clearButton.addEventListener('click', () => {
  numbers = [];
  operators = [];
  display.textContent = '';
  resultDisplay.textContent = '';
});

delButton.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, display.textContent.length - 1);
});

decimalButton.addEventListener('click', () => {
  if ( !(display.textContent.match(/\./)) ) {
    display.textContent += decimalButton.textContent;
  }
});

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'ERROR';
  }
}
