/**
 * es6 modules and imports
 */

//Calling jQuery
const $ = require('jquery');

import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
// const {getMovies} = require('./api.js');
import {getMovies, postMovies, deleteMovies} from './api.js';


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
               </ul>
               <button data-movieid="${id}" class="delete">Delete Movie</button>
                `;
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



$(document).on("click", ".delete", function () {
  console.log('delete button was clicked');
  let movieID = $(this).data("movieid");
  const url = 'api/movies/' + parseInt(movieID);
  const options = {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(url, options)
          .then(response => response.json())

          ///whole getMovies function sequence from above
          .then(getMovies().then((movies) => {
            document.getElementById('load-screen').style.display = "none";
            console.log('Here are all the movies:');
            let output = '<h2>Movie Posts</h2>';
            movies.forEach(({title, rating, id}) => {
              console.log(`id#${id} - ${title} - rating: ${rating}`);
              output += `<ul>
               <li>id: ${id}</li>
               <li>title: ${title}</li>
               <li>rating: ${rating}</li>
               </ul>
               <button data-movieid="${id}" class="delete">Delete Movie</button>
                `;
            });
            document.getElementById('output').innerHTML = output;
          }).catch((error) => {
            alert('Oh no! Something went wrong.\nCheck the console for details.');
            console.log(error);
          }));
        //this concludes the getMovies function sequence from above
    });



// jQuery
// $(document).on("click",".trash",function () {
//   let movie_id = $(this).attr("id");
//   const url = '/api/movies/' + movie_id;
//   const options = {
//     method: 'DELETE',
//     headers: {'Content-Type': 'application/json'}
//   };
//   fetch(url, options)
//       .then(updatemovies)
// });


// document.getElementById('deleteMovie_${id}').addEventListener('click', console.log('delete is working'));

// document.getElementById('deleteMovie_${id}').addEventListener('click', function () {
//   deleteMovies({
//   }).then((movies) => {
//     console.log(movies);
//   })
// });






