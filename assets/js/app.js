const p = document.querySelector('p');
const button = document.querySelector('button');

const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`

window.addEventListener('load', jokes)
button.addEventListener('click', jokes)

function jokes(e) {
  p.classList.remove('fade')
  fetch(url)
  .then(data => data.json())
  .then(item =>{
     p.textContent = `${item.joke}`;
     p.classList.add('fade')
  });
}









//
