import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";
import filmsSlice from "./slices/filmsSlice";
const store = configureStore({
    reducer: {
        genresData: genresSlice,
        filmsData: filmsSlice
    }
})

export default store