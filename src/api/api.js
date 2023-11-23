import axios from "axios";

const apiKey = 'f36f23edf6e10fd2ddcf939916b1f67a'
export const imgUrl = "https://image.tmdb.org/t/p/w500/"

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGM4NjNiZjI5MWY1NjUxOTAyYmIzYWY4MjI1NmUwMiIsInN1YiI6IjYxNTYyZWY2ZTE4Yjk3MDA2MjkyODgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_pBSpt1JQsgAdYyYZbt6dHDzEmGljF11e4m1MO-CHg",
    }
})

export const filmsApi = {
    getGenres(lang = 'ru') {
        if (lang == 'en') {
            return instance.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)
        }
        return instance.get(`/genre/movie/list?api_key=${apiKey}&language=ru`)
    },
    getFilmsByPage(pageNumber, lang = "ru") {
        if (lang == 'en') {
            return instance.get(`/discover/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
        }
        return instance.get(`/discover/movie?api_key=${apiKey}&language=ru&page=${pageNumber}`)
    },
    getFilmById(movie_id, lang = "ru") {
        if (lang == 'en') {
            return instance.get(`/movie/${movie_id}?api_key=${apiKey}&language=en-US`)
        }
        return instance.get(`/movie/${movie_id}?api_key=${apiKey}&language=ru`)

    },
    getFilmTrailer(id, lang = "ru") {
        if (lang == 'en') {
            return instance.get(`/movie/${id}/videos?language=en-US`)
        }
        return instance.get(`/movie/${id}/videos?language=ru`)
    },
    getFilmsByGenre(genreId, lang = "ru", pageNumber = 1) {
        if (lang == 'en') {
            return instance.get(`/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${pageNumber}`)
        }
        return instance.get(`/discover/movie?api_key=${apiKey}&language=ru&with_genres=${genreId}&page=${pageNumber}`)
    },
    getFilmsByName(text, lang = "ru") {
        if (lang == 'en') {
            return instance.get(`/search/movie?api_key=${apiKey}&query=${text}&language=en-US`)
        }
        return instance.get(`/search/movie?api_key=${apiKey}&query=${text}&language=ru`)
    }
}