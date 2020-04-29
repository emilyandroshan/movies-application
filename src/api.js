module.exports = {
  getMovies: () => {
    return fetch('api/movies')
        .then(response => response.json());
  },

  postMovies: (movie) => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie)
    };
    fetch('api/movies', options)
        .then(response => response.json())
  },

  // deleteMovies: (movie, id) => {
  //   const options = {
  //     method: 'DELETE',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   //removed $ sign in front of id
  //   fetch(`api/movies/{id}`, options)
  //       .then(response => response.json())
  // }

};


//   const options = {
//     method: 'DELETE',
//     headers: {'Content-Type': 'application/json'}
//   };
//   fetch(url, options)
//       .then(updatemovies)
// });





//
// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = '/posts';
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(blogPost),
// };
// fetch(url, options)
//     .then(/* post was created successfully */)
//     .catch(/* handle errors */);