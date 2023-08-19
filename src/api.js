const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGM1YmIyYWY2M2U1ZjA3MDJkZGYwMDlkZGNiMTQ3OSIsInN1YiI6IjY0ZGY2ZjBjZDEwMGI2MTRiMTVhY2NiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PtyT3tlwlGzy-tEpOGwhPte5ZQ8DTF7z5gsK90XZDSw`
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

