const baseUrl = "https://api.themoviedb.org/3";
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
};
const getPosterUrl = (poster_path) => {
    return `https://image.tmdb.org/t/p/w500/${poster_path}`
}
const getBackdropUrl = (backdrop_path) => {
    return `https://image.tmdb.org/t/p/w780/${backdrop_path}`
}
const getTrendingMovies = (period) => {
    return fetch(`${baseUrl}/trending/movie/${period}?language=en-US`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));

}
const getPopularMovies = () => {
    return fetch(`${baseUrl}/movie/popular?language=en-US&page=1S`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));

}
const getMoviesByName = (query, page) => {
    return fetch(`${baseUrl}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}
const getMovieById = (id) => {
    return fetch(`${baseUrl}/movie/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}
const getVideos = (id) => {
    return fetch(`${baseUrl}/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}
const getYoutubeUrl = (key) => {
    return `https://www.youtube.com/watch?v=${key}`
}
const getImages = (id) => {
    return fetch(`${baseUrl}/movie/${id}/images`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}
const getCast = (id) => {
    return fetch(`${baseUrl}/movie/${id}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}
export { getTrendingMovies, getPopularMovies, getMoviesByName, getMovieById, getPosterUrl, getBackdropUrl, getVideos, getYoutubeUrl, getImages, getCast }