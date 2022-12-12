import { createSlice } from '@reduxjs/toolkit'

const temp = [{title: 'the battle of orange', author: 'helloworld'},
              {title: 'fibonacci\'s spiderman', author: 'goodbyeworld'}]
const initialState = {
  //some sort of 'user logged in' state
  bookModal: false, //show modal when requested
  bookData: temp, // []
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getBooks: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //called upon successful login
      //fetch all books with current user_id
      //set to bookArray
      fetch('/')
      .then(res => {

      })
      .catch(err => {
        
      })
    },

  },
})

export const { getBooks } = bookSlice.actions

export default bookSlice.reducer