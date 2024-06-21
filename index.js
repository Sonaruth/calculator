// const display = document.getElementById("display");
// const keys = document.getElementById("#keys");
// const operatorBtn= document.getElementsByClassName(".operator-btn");
// display.addEventListener('click', () => {

// });

const display = document.getElementById("display");
 function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value ="";
}
function calculate(){
        display.value = eval(display.value);
     }



// the start of mmy js journey
// const btnElement = document.querySelector("button");
// const spanElement= document.querySelector("span");
// btnElement.addEventListener("click", () => {
//   const yourName= prompt ('please enter your name:')
//   spanElement.textConten =yourName;
// });