import { createSlice } from '@reduxjs/toolkit'

const storedBooks = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY))

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        value: storedBooks ? storedBooks : [],
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
