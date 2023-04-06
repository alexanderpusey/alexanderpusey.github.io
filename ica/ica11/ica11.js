let newquotebttn = document.getElementById("js-new-quote")
let textarea = document.getElementById("js-quote-text")
let address = 'https://trivia.cyberwisp.com/getrandomchristmasquestion'
let quote = document.createElement('h1')


window.addEventListener('load', () => {
    textarea.append(quote)
    getQuote()
})

newquotebttn.addEventListener('click', () => {
    getQuote()
})

async function getQuote() {
    fetch(address)
        .then(res => res.json())
        .then(
        (result) => {
                console.log(result)
                quote.innerHTML = result.question
        },
        (error) => {
            alert('error')
            console.log(error)
        }
    )
}