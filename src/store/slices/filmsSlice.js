import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filmsApi } from "../../api/api";

export const fetchFilms = createAsyncThunk(
    'fetchByPage',
    async ({ pageNumber, lang }) => {
        const res = await filmsApi.getFilmsByPage(pageNumber, lang)

        return res.data.results
    }
)

export const fetchFilmById = createAsyncThunk(
    'fetchFilmById',
    async ({ id, lang }) => {
        const res = await filmsApi.getFilmById(id, lang)

        return res.data
    }
)

export const fetchVideo = createAsyncThunk(
    'fetchVideo',
    async ({ id, iframeRef, lang }) => {
        const response = await filmsApi.getFilmTrailer(id, lang);
        const result = response.data.results;
        result.forEach((elm) => {
            iframeRef.current.setAttribute(
                "src",
                `https://www.youtube.com/embed/${elm?.key}`
            );
        })
    }
)

const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState: {
        films: [],
        film: {},
        pageNumber: 1,
        isFetching: false
    },
    reducers: {
        increment(state) {
            state.pageNumber += 1
        },
        decrement(state) {
            state.pageNumber -= 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.isFetching = true
        })

        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.films = action.payload
            state.isFetching = false
        })
        builder.addCase(fetchFilmById.fulfilled, (state, action) => {
            state.film = action.payload
        })
    }
})

export const { increment, decrement } = filmsSlice.actions
export default filmsSlice.reducer