const changeColorButton = document.getElementById("changeColor");
const colorCode = document.getElementById("colorCode");
const resetButton = document.getElementById("reset");


function generateColor() {

    const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

    return randomColor;
}


changeColorButton.addEventListener("click", function() {

    const newColor = generateColor();

    document.body.style.backgroundColor = newColor;

    changeColorButton.style.backgroundColor = newColor;

    colorCode.textContent = newColor;

});

resetButton.addEventListener("click", function() {

    document.body.style.backgroundColor = "#FFFFFF";
    changeColorButton.style.backgroundColor = "#FFFFFF";
    colorCode.textContent = "#FFFFFF";

});