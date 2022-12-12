import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, createBook, updateBook, deleteBook } from '../redux/counterSlice'
import BookCard from './BookCard.jsx'
import '../styles/books.scss'

function Header() {
  const bookData = useSelector(state => state.book.bookData);
  const userData = useSelector(state => state.book.userData);
  const temp = 'helloworld';
  return (
    <header>
      <h3>Welcome <span>{temp}</span></h3>
      
    </header>
  )
}

export default Header