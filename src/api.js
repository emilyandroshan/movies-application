module.exports = {
  getMovies: () => {
    return fetch('api/movies')
        .then(response => response.json());
  },

  postMovies: (newMovie) => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie)
    };
    fetch('api/movies', options)
        .then(response => response.json())
  }
};



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