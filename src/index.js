import generateStatement from './generateStatement';
import './styles/main.scss'
import planet from './assets/overheating-planet-earth-global-warming-campaign-mixed-media.jpg'



const planetImg = document.querySelector('#planet-img');
planetImg.src = planet;

const statementBtn = document.querySelector('#statement-btn');
// const statementContainer = document.querySelector('#statement');

statementBtn.addEventListener('click', generateStatement);

console.log(generateStatement());