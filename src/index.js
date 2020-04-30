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
import {getMovies, postMovies, editMovies, deleteMovies} from './api.js';

refreshMovies();
function refreshMovies() {

    getMovies().then((movies) => {

        document.getElementById('load-screen').style.display = "none";

        console.log('Here are all the movies:');
        let output = '';
        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);
            output += `<div class="d-flex mt-4 mb-3 ml-4 mr-4">
                <ul class="list-unstyled">
               <li>id: ${id}</li>
               <li>title: ${title}</li>
               <li>rating: ${rating}</li>
               <li><button data-movieid="${id}" class="delete btn btn-primary mt-2">Delete</button></li>
               </ul>
               </div>
                `;
        });
        document.getElementById('output').innerHTML = output;
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

}



// var submitButton = document.getElementById('submit');
// document.getElementById('submit').addEventListener('click', console.log('hellooooo'));


//POST MOVIES USING VANILLA JS
document.getElementById('submit').addEventListener('click', function () {
  postMovies({
    title: document.getElementById('movie-title').value,
    rating: document.getElementById('movie-rating').value
  }).then((movies) => {
    console.log(movies);
  })
});


// <script type="text/javascript">
//     function autoFill() {
//         document.getElementById('input1').value = "My Text Input";
//         document.getElementById('input2').value = "Dropdown2";
//
//         var radioElements = document.getElementsByName("input3");
//
//         for (var i=0; i<radioElements.length; i++) {
//             if (radioElements[i].getAttribute('value') == 'Radio3') {
//                 radioElements[i].checked = true;
//             }
//         }
//     }
//     </script>


//EDIT MOVIES USING VANILLA JS
document.getElementById('submit-edit').addEventListener('click', function () {
    let data = {
        title: document.getElementById('edit-movie-title').value,
        rating: document.getElementById('edit-movie-rating').value
    };
    let movieId = document.getElementById('edit-movie-id').value;
    editMovies(data, movieId).then((movies) => {
        console.log(movies);
    })
});



//DELETE MOVIES USING JQUERY
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
          .then(refreshMovies)
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






