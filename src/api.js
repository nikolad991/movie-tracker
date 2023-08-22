const baseUrl = "https://api.themoviedb.org/3";
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
export const getBackdropUrl = (backdrop_path) => {
    return `https://image.tmdb.org/t/p/w780${backdrop_path}`
}
export const getTrendingMovies = (period) => {
    return fetch(`${baseUrl}/trending/movie/${period}?language=en-US`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));

}
export const getPopularMovies = () => {
    return fetch(`${baseUrl}/movie/popular?language=en-US&page=1S`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));

}

