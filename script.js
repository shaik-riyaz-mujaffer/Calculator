let btns = document.querySelectorAll("button");
let screen = document.querySelector("#screen");
let operatorBtns = document.querySelectorAll(".operator_btn");
for(button of btns){
    button.addEventListener("onclick",addTodisplay)
}
function addTodisplay(){
    button.innerText = screen.value;
}