let generatebutton = document.getElementById("button")
let address = 'https://api.thecatapi.com/v1/images/search?limit=9'
let quote = document.createElement('h1')
let cat1 = document.getElementById("cat1")
let cat2 = document.getElementById("cat2")
let cat3 = document.getElementById("cat3")
let cat4 = document.getElementById("cat4")
let cat5 = document.getElementById("cat5")
let cat6 = document.getElementById("cat6")
let cat7 = document.getElementById("cat7")
let cat8 = document.getElementById("cat8")
let cat9 = document.getElementById("cat9")

window.addEventListener('load', () => {
    getCats()
})

generatebutton.addEventListener('click', () => {
    getCats()
})

async function getCats() {
    fetch(address)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                cat1.src = result[0].url
                cat2.src = result[1].url
                cat3.src = result[2].url
                cat4.src = result[3].url
                cat5.src = result[4].url
                cat6.src = result[5].url
                cat7.src = result[6].url
                cat8.src = result[7].url
                cat9.src = result[8].url
            },
            (error) => {
                alert('error')
                console.log(error)
            }
        )
}