let display = document.getElementById('display');

function appendNumber(num) {
  if (display.innerText === '0') {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(operator) {
  let current = display.innerText;
  const lastChar = current[current.length - 1];
  if (['+', '-', '*', '/', '%'].includes(lastChar)) {
    display.innerText = current.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  let current = display.innerText;
  if (current.length === 1 || (current.length === 2 && current.startsWith('-'))) {
    display.innerText = '0';
  } else {
    display.innerText = current.slice(0, -1);
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (e) {
    display.innerText = 'Error';
  }
}
