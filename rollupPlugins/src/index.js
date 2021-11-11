import "../style.css";
import LOGO_IMG from '../assets/es6.png'
console.log('Hello World!')

const imgElement = document.createElement('img')
imgElement.className = 'log-img'
imgElement.src = LOGO_IMG

document.body.append(imgElement)