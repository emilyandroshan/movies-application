/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
// const {getMovies} = require('./api.js');
import {getMovies} from './api.js';

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
  //TRYING TO SOLVE THE SECOND .then problem
  // movies.forEach(({title, rating, id}) => {
  //   console.log(`id#${id} - ${title} - rating: ${rating}`);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

//DECIDE TO USE VANILLA JS OR JQUERY FOR OUTPUT TO RENDER DATA
//JQUERY NEEDS SCRIPT????
// document.getElementsByClassName('container').innerHTML =
