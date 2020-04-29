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



//work in progress of POST
postMovies({
  title: "Star Wars",
  rating: 1
}).then((movies) => {
  console.log(movies);
//   console.log('Here is the new movie the user added:');
//   movies.forEach(({title, rating, id}) => {
//     console.log(`id#${id} - ${title} - rating: ${rating}`);
//   });
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
});


// var submitButton = document.querySelector('#submit');
// submitButton.addEventListener('click', addAMovie);
//
// function addAMovie(){
//   var newMovie = {
//     id: movies.length + 1,
//     title: document.getElementById('movie-title').value,
//     rating: document.getElementById('movie-rating').value
//   };
//   console.log(movies);




// const movieTitle = document.querySelector('#movie-title');
// const movieRating = document.querySelector('#movie-rating');
// const submitButton = document.querySelector('#submitButton');

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


