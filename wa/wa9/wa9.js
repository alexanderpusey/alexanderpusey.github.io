const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was a perfectly average day (and 75 fahrenheit) for :insertx: before it all started. Upon arriving at :inserty:, he gasped in horror as he :insertz:. Bob was also there, but he was unbothered, for :insertx: it just wasnt in the cards considering hes 150 pounds';
const insertX = ['Ralph', 'Kuminga', 'Jeff Green'];
const insertY = ['the dispensary', 'cape cod', 'corner-store'];
const insertZ = ['forgot his wallet', 'grew in size', 'imploded'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('75 fahrenheit', temperature);
    newStory = newStory.replaceAll('150 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}