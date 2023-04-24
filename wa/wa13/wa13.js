let sliders = document.getElementsByClassName('slider')
let percentage = document.getElementById('volume')

update()

for (s of sliders) {
    s.addEventListener('input', () => {
        update()
    })
}

function update() {

    const volume = [...sliders].reduce((acc, slider) => acc + parseInt(slider.value), 0)
    percentage.textContent = volume + '%'

    for (let i = 1; i < sliders.length; i++) {
        if (parseInt(sliders[i - 1].value) < (100/sliders.length)) {
            sliders[i].disabled = true
        }
        else {
            sliders[i].disabled = false
        }
    }

    for (let i = 0; i < (sliders.length - 1); i++) {
        if (parseInt(sliders[i + 1].value) > 0) {
            sliders[i].disabled = true
        }
    }

    if (parseInt(sliders[1].value) === 0) {
        sliders[0].disabled = false
    }
}