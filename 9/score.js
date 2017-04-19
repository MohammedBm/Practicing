//BUTTON 1 STUFFS
let p1Button = document.getElementById("p1"); //linking button to varible
let p1Display = document.querySelector("#p1Display");
let p1Score = 0;
//BUTTON 2 STUFFS
let p2Button = document.getElementById("p2");
let p2Display = document.querySelector("#p2Display");
let p2Score = 0;
//BUTTON RESET
let resetButton = document.getElementById("reset");
//INPUT SELECTOR
let numInput = document.querySelector("input");
let p = document.querySelector('p');
let winningScoreDisplay = document.querySelector("p span")
//OTHER STUFFS;
let gameOver = false;
let winningScore = 5;


///Eventlisteners

//BUTTON 1 EventLisner
p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});
//BUTTON 2 EventLisner
p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});
//BUTTON reset EventLisner
resetButton.addEventListener("click", function() {
  reset();

})
//function reset
function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
//INPUT Eventlisteners
numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})









//
