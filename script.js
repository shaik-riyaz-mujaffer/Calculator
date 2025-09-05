let screen = document.getElementById("screen");
let history = [];
let historyIndex = -1;
function add(val) {
    screen.value += val;
}
function clearDisplay() {
    screen.value = " ";
}
function calculate() {
    try {
    const result = eval(screen.value);
    screen.value = result;
    history.push(result);
    historyIndex = history.length;
  } catch (err) {
    screen.value = 'Error';
  }
}
function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.','(',')'].includes(key)) {
    add(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
  else if (key === 'ArrowUp') {
  prevOutput();
} else if (key === 'ArrowDown') {
  nextOutput();
}
});
function prevOutput() {
  if (history.length === 0) return;
  if (historyIndex > 0) {
    historyIndex--;
    screen.value = history[historyIndex];
  }
}

function nextOutput() {
  if (history.length === 0) return;
  if (historyIndex < history.length - 1) {
    historyIndex++;
    screen.value = history[historyIndex];
  } else {
    historyIndex = history.length;
    screen.value = '';
  }
}
