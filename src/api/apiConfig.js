const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '35dd2b3e7382d6d064d4289799b76bb0',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;