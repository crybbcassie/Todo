import {configureStore} from '@reduxjs/toolkit'
import textSlice from './textSlice'
import todosSlice from './todosSlice'

export const store = configureStore({
    reducer: {
        text: textSlice,
        todos: todosSlice
    },
})