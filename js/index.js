const about = document.getElementById("aboutnav")
const github = document.getElementById("githubnav")
const linkedin = document.getElementById("linkedinnav")
const object = document.getElementById("objectnav")

about.addEventListener("click", function () {
    window.open("./about.html", "_self")
})

github.addEventListener("click", function () {
    window.open("https://github.com/alexanderpusey", "_self")
})

linkedin.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/alex-pusey-b883a0123/", "_self")
})

object.addEventListener("click", function () {
    window.open("./object.html", "_self")
})

