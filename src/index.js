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
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

//work in progress of POST
// postMovies().then((movies) => {
//   console.log('Here is the new movie the user added:');
//   movies.forEach(({title, rating, id}) => {
//     console.log(`id#${id} - ${title} - rating: ${rating}`);
//   });
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
// });

const movieTitle = document.querySelector('#movie-title');
const movieRating = document.querySelector('#movie-rating');
const submitButton = document.querySelector('#submitButton');

//adds DOM event when clicking on the submit button
submitButton.addEventListener('click', keyCoffee);
//


//render html of movies not coffee
// function keyCoffee() {
//   var html = '';
//   for(var i = 0; i < coffees.length; i++) {
//     if(coffees[i].name.toLowerCase().includes(document.getElementById('coffee-name').value.toLowerCase()) && (selectedRoast === coffees[i].roast)) {
//       console.log(coffees.name);
//       html += renderCoffee(coffees[i]);
//     }
//     tbody.innerHTML = html;
//   }
//   return html;
// }

//tbody.innerHTML = renderCoffees(coffees);


