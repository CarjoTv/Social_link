document.addEventListener("DOMContentLoaded", function() {
    let htmldoc = document.querySelector("#html")
    let btnDark = document.querySelector("#darkmode")

    if (btnDark) {
        btnDark.addEventListener("click", cambiarDarkmode)
    }

    function cambiarDarkmode(){
        htmldoc.classList.toggle("dark")
    }
})