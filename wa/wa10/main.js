const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [['./images/pic1.jpeg', 'scritch'], ['./images/pic2.jpeg', 'scratch'], ['./images/pic3.jpeg', 'tabby cat'], ['./images/pic4.jpeg', 'sleepston'], ['./images/pic5.jpeg', 'more sleepston']]

/* Declaring the alternative text for each image file */
// const alttxt = ['eye', 'beard', 'thing', 'another thing', 'last thing ever']

/* Looping through images */
for (var i = 0; i < images.length; i++) {
    let img = document.createElement('img')
    img.setAttribute('src', images[i][0])
    img.setAttribute('alt', images[i][1])
    thumbBar.append(img)
    img.addEventListener('click', e => {
        displayedImage.src = e.target.src
        displayedImage.alt = e.target.alt
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class')
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light')
        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }
})