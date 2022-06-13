// We use store as a data layer where all data fetched can be accessed by the whole APP by using Provider by redux

import { configureStore } from '@reduxjs/toolkit'

import { cryptoAPI } from '../services/cryptoAPI'

export default configureStore({
    // We need to wrap all APIs we make here to use them across all the components
    reducer : {
        [cryptoAPI.reducerPath] : cryptoAPI.reducer,
        // [stockAPI.reducerPath] : stockAPI.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(cryptoAPI.middleware)
})