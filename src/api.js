const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
};
export const getPosterUrl = (poster_path) => {
    return `https://image.tmdb.org/t/p/w500${poster_path}`
}
export const getTrendingMovies = () => {
    return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));

}

