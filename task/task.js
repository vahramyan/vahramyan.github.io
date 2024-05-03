function getNumber() {
    let number = document.getElementById("number");
    let table = document.getElementsByTagName("td");
    table[0].innerText = number.value;
}
function getBGcolor(){
    let color = document.getElementById("bg");
    let table = document.getElementsByTagName("td");
    console.log("table");
    table[1].innerText = color.value;
}
function getTextColor(){
    let color = document.getElementById("tc");
    let table = document.getElementsByTagName("td");
    console.log("table");
    table[2].innerText = color.value 
}
function getTextArea(){
    let text = document.getElementById("tA");
    let table = document.getElementsByTagName("td");
    console.log("table")
    table[3].innerText = text.value;
}

function change(){
    let table = document.getElementsByTagName("td");
    let number = table[0].innerText;
    let bgColor = table[1].innerText;
    let textColor = table[2].innerText;
    let text = table[3].innerText;
    let div = document.getElementById("div"+ number);
    console.log(div);
    div.innerText = text;
    div.style.color = textColor ;
    div.style.backgroundColor =  bgColor;
}

document.getElementById("tA").addEventListener("input", function() {
    getTextArea()
});
document.getElementById("number").addEventListener("input", function() {
    getNumber() 
});
document.getElementById("bg").addEventListener("input", function() {
    getBGcolor()
});
document.getElementById("tc").addEventListener("input", function() {
    getTextColor()
});
function saveTheme() {
    let theme = document.getElementById("themeSelector" ).value;
    localStorage.setItem("theme", theme);
    loadTheme()
}

function loadTheme() {
    let theme = localStorage.getItem("theme");
    if (theme) {
        document.body.className = theme;
        document.getElementById("themeSelector").value = theme;
    }
}

window.onload = loadTheme; 
