btnToggleMode = document.querySelector("header .tools button");
body = document.querySelector("body")

btnToggleMode.onclick = function darkMode() {
    body.classList.toggle("dark") 
}
