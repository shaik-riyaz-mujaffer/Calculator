let screen = document.getElementById("screen");
function add(val) {
    screen.value += val;
}
function clearDisplay() {
    screen.value = " ";
}
function calculate() {
    try {
        let val = eval(screen.value);
        screen.value = val;
    }
    catch(error){
        screen.value = "Error";
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
    event.preventDefault(); // prevent form submission if any
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
