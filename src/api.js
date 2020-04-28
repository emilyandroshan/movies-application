module.exports = {
  getMovies: () => {
    return fetch('http://localhost:1313/api/movies')
      .then(response => response.json());
  }
};
  // postMovies: () => {
  //
  // }
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