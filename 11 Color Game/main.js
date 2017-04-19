let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDispaly = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector('h1');
let resetButton = document.querySelector("#reset")
let modeButtons = document.querySelectorAll(".mode")

init();

/// resttart the game
resetButton.addEventListener("click", function() {
    reset();
})

///////////////////////// functions /////////////////////
//function to change color all colors to the pickedColor

function init() {
    setUpModeButtons();
    setUpSqaures();
    reset();
}


function setUpSqaures() {
    for (let i = 0; i < squares.length; i++) {
        //ad inital colors to squares
        squares[i].style.background = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            let clickedColor = this.style.background;
            //compare colot to pickcolor
            console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!"
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })

    }
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}



function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}


function changeColors(color) {
    //loop throgh all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match color
        squares[i].style.background = color;
    }
}
//generate random color from the array;
function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

//generateRandomColors to an array and give it to the varible
function generateRandomColors(num) {
    //make an array
    let arr = []
    //repate num times
    for (let i = 0; i < num; i++) {
        //get random color and push into array;
        arr.push(randomColor())
    }
    //reutnr that array
    return arr;
}

//genrate random color and send to the functoin above
function randomColor() {
    //pick a "red" from 0 -255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 -255
    let g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 -255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}