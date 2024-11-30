let counter = 0;
const region = document.querySelector(".region");
const colors = ["blue", "green", "red", "yellow", "pink", "orange", "purple", "black", "magenta", "cyan"];

function generate() {
    region.innerHTML += "\n<div id=\"t" + counter + "\"></div>";
    const currentDiv = document.getElementById("t" + counter);
    currentDiv.style.borderRightWidth = Math.floor(Math.random() * 100) + "px";
    currentDiv.style.borderBottomWidth = Math.floor(Math.random() * 100) + "px";
    currentDiv.style.borderLeftWidth = Math.floor(Math.random() * 100) + "px";
    currentDiv.style.borderTopWidth = Math.floor(Math.random() * 100) + "px";  
    currentDiv.style.top = Math.floor(Math.random() * 80) + "%";
    currentDiv.style.right = Math.floor(Math.random() * 95) + "%";
    currentDiv.style.rotate = Math.floor(Math.random() * 360) + "deg";
    const colorId = Math.floor(Math.random() * colors.length);
    currentDiv.style.borderRightColor = colors[colorId];
    counter++;
}

function clearTriangle() {
    console.log("Clearing");
    region.innerHTML = "";
    counter = 0;
}