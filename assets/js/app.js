const p = document.querySelector('p');
const button = document.querySelector('button');

const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`


button.addeventlistener('click', e=>{
  console.log("hello") 
  p.classList.remove('fade')
  fetch(url)
  .then(data => data.json())
  .then(item =>{
     p.textCpontent = `${item.joke}`;
     p.classList.add('fade')
 }) 










//
