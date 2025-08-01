let display = document.getElementById('display');

function appendNumber(num) {
  if (display.textContent === '0' || display.textContent === 'Error') {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
}

function appendSymbol(symbol) {
  const lastChar = display.textContent.slice(-1);
  const operators = ['+', '-', '*', '÷', '.'];

  // Avoid duplicate operators
  if (operators.includes(lastChar) && operators.includes(symbol)) {
    return;
  }

  if (symbol === '÷') {
    display.textContent += '/';
  } else {
    display.textContent += symbol;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function calculateResult() {
  try {
    let expression = display.textContent;
    let result = eval(expression);
    display.textContent = result;
  } catch {
    display.textContent = 'Error';
  }
}
