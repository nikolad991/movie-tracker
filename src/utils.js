const getPosterUrl = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500/${poster_path}`;
};
const getBackdropUrl = (backdrop_path) => {
  return `https://image.tmdb.org/t/p/w780/${backdrop_path}`;
};

const getYoutubeUrl = (key) => {
  return `https://www.youtube.com/watch?v=${key}`;
};

export { getPosterUrl, getBackdropUrl, getYoutubeUrl };
