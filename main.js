var state = 0;

const firstText = document.getElementById("heading_text");
const secondText = document.getElementById("next");
const thirdText = document.getElementById("p2_text");
const fourthText = document.getElementById("previous");

var mainText = "";
var btext = "";
var smallText = "";
var smallBText = "";

var main = ["I can read your mind", "Pick a number from 01-99", "Add both digits together to get a new number", "Subtract your new number from the original number"];
var button = ["NEXT", "NEXT", "NEXT", "NEXT", "REVEAL", ""];
var small = ["", "when you have your number click next", "Ex: 14 is 1 + 4 = 5 click next to proceed", "Ex: 14 - 5 = 9 click next to proceed", "Find your new number. Note the symbol by the number", "Your symbol is: "];
var smallButton = ["0", "BACK", "BACK", "BACK", "BACK", "BACK"];

function build() {
    switch (state) {
        case 0:
            button1.style.display = "block";
            button2.style.display = "none";
            mainText = main[state];
            btext = button[state];
            smallText = small[state];
            smallBText = smallButton[state];
            break;
        case 1:
            button1.style.display = "block";
            button2.style.display = "block";
            mainText = main[state];
            btext = button[state];
            smallText = small[state];
            smallBText = smallButton[state];
            break;
        case 2:
            button1.style.display = "block";
            button2.style.display = "block";
            mainText = main[state];
            btext = button[state];
            smallText = small[state];
            smallBText = smallButton[state];
            break;
        case 3:
            button1.style.display = "block";
            button2.style.display = "block";
            mainText = main[state];
            btext = button[state];
            smallText = small[state];
            smallBText = smallButton[state];
            break;
        case 4:
            case4();
            button1.style.display = "block";
            button2.style.display = "block";
            mainText = string;
            btext = button[state];
            smallText = small[state];
            smallBText = smallButton[state];
            break;
        case 5:
            button1.style.display = "none";
            button2.style.display = "block";
            mainText = randomSymbol, newRandomSymbol;
            btext = button[state];
            smallText = small[state] + random9;
            smallBText = smallButton[state];
            break;
    }
    firstText.innerHTML = mainText;
    secondText.innerHTML = btext;
    thirdText.innerHTML = smallText;
    fourthText.innerHTML = smallBText;

}
var button1 = document.querySelector("#next");
var button2 = document.querySelector("#previous");

button1.addEventListener('click', nextPage);
button2.addEventListener('click', previousPage);

function nextPage() {
    state++;
    build();
}

function previousPage() {
    state--;
    build();
}

function reset() {
    state = 0;
    build();
}

function init() {
    build();
}
init();

var string = "";
var arr = ['!', '@', '#', '%', '^', '&', '*'];
var randomSymbol = "";
var newRandomSymbol = "";
var n;
var random9 = "";
function case4() {
    string = "";
    random9 = arr[Math.floor(Math.random() * arr.length)];
    for (let n = 0; n <= 99; n++) {
        if (n % 9 === 0) {
            randomSymbol = random9;
        } else {
            randomSymbol = arr[Math.floor(Math.random() * arr.length)];
        }
        string += `${n} - ${randomSymbol} <br>`;

    }
    firstText.innerHTML = string;
}



