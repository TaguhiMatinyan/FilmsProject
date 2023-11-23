import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filmsApi } from "../../api/api";

export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async (lang) => {
        const res = await filmsApi.getGenres(lang)

        return res.data.genres
    }
)

export const fetchFilmsByGenre = createAsyncThunk(
    'fetchFilmsByGenre',
    async ({ genreId, lang }) => {
        const res = await filmsApi.getFilmsByGenre(genreId, lang)

        return res.data.results
    }
)

export const fetchMoreGenreFilms = createAsyncThunk(
    'fetchMoreGenreFilms',
    async ({ genreId, pageNumber, lang }) => {
        const res = await filmsApi.getFilmsByGenre(genreId, lang, pageNumber)

        return res.data.results
    }
)

export const searchByInput = createAsyncThunk(
    'searchByInput',
    async ({ e, lang }, { dispatch }) => {
        dispatch(changeInputValue(e.target.value))
        dispatch(openResultsDiv())

        const res = await filmsApi.getFilmsByName(e.target.value, lang)

        return res.data.results
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        genres: [],
        genresFilms: [],
        searchedFilms: [],
        inputValue: '',
        lang: 'en',
        pageNumber: 1,
        active: null,
        isFetching: false,
        resultShown: false,
        isDarkTheme: true
    },
    reducers: {
        changeActiveBtn(state, action) {
            state.active = action.payload
        },
        changePageNumber(state) {
            state.pageNumber += 1
        },
        openResultsDiv(state) {
            state.resultShown = true
        },
        closeResultsDiv(state) {
            state.resultShown = false
        },
        changeInputValue(state, action) {
            state.inputValue = action.payload
        },
        changeLang(state, action) {
            state.lang = action.payload
        },
        changeTheme(state) {
            state.isDarkTheme = !state.isDarkTheme
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })

        builder.addCase(fetchFilmsByGenre.pending, (state) => {
            state.isFetching = true
        })
        builder.addCase(fetchFilmsByGenre.fulfilled, (state, action) => {
            state.isFetching = false
            state.genresFilms = action.payload
        })

        builder.addCase(fetchMoreGenreFilms.pending, (state) => {
            state.isFetching = true
        })

        builder.addCase(fetchMoreGenreFilms.fulfilled, (state, action) => {
            state.isFetching = false
            state.genresFilms = [...state.genresFilms, ...action.payload]
        })

        builder.addCase(searchByInput.fulfilled, (state, action) => {
            state.searchedFilms = action.payload
        })
    }
});
export const {
    changeActiveBtn,
    changePageNumber,
    openResultsDiv,
    closeResultsDiv,
    changeInputValue,
    changeLang,
    changeTheme
} = genresSlice.actions
export default genresSlice.reducer;