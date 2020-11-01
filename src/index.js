import "./css/styles.css";

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]')
}
let inervalId = '';
refs.stop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random()*(max - min + 1)+min);
};

refs.start.addEventListener('click', onStartChangeColor);
refs.stop.addEventListener('click', onStopChangeColor);

function turnOnColor() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
}

function onStartChangeColor() {
  inervalId = setInterval(turnOnColor, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
}


function onStopChangeColor() {
  clearInterval(inervalId);
  refs.start.disabled = false;
  refs.stop.disabled = true;

}



