let x
let n

function getUserInput() {
    n = document.getElementById("userInput").value;
}

document.getElementById("Roll_button").onclick = function(){
    x = Math.floor(Math.random() * n) + 1;
    document.getElementById("num").innerHTML = x;

}

document.getElementById("Reset").onclick = function(){
    x = 'Haa Haa Hogya Reset...';
    document.getElementById("num").innerHTML = x;

}
