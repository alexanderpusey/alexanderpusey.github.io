const about = document.getElementById("aboutnav")
const github = document.getElementById("githubnav")
const linkedin = document.getElementById("linkedinnav")
const bcycle = document.getElementById("bcyclenav")

about.addEventListener("click", function () {
    window.open("./about.html", "_self")
})

github.addEventListener("click", function () {
    window.open("https://github.com/alexanderpusey", "_self")
})

linkedin.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/alex-pusey-b883a0123/", "_self")
})

bcycle.addEventListener("click", function () {
    window.open("/bcycle-map/map.html", "_self")
})

