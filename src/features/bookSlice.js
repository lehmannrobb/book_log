import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        value: [],
    },
    reducers: {
        addBook: (state, action) => {
            state.value.push(action.payload)
        },
        deleteBook: (state, action) => {
           state.value = state.value.filter(book => book.id !== action.payload)
        },
    }
})

export const { addBook, deleteBook } = bookSlice.actions
export default bookSlice.reducer;