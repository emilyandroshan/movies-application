/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
// const {getMovies} = require('./api.js');
import {getMovies, postMovies} from './api.js';


getMovies().then((movies) => {

  document.getElementById('load-screen').style.display = "none";

  console.log('Here are all the movies:');
  let output = '<h2>Movie Posts</h2>';
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
    output += `<ul>
               <li>id: ${id}</li>
               <li>title: ${title}</li>
               <li>rating: ${rating}</li>
               </ul>`;
  });
  document.getElementById('output').innerHTML = output;
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});




// var submitButton = document.getElementById('submit');
// document.getElementById('submit').addEventListener('click', console.log('hellooooo'));


document.getElementById('submit').addEventListener('click', function () {
  postMovies({
    title: document.getElementById('movie-title').value,
    rating: document.getElementById('movie-rating').value
  }).then((movies) => {
    console.log(movies);
  })
});






