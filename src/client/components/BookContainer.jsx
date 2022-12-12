import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../redux/bookSlice'
import BookCard from './BookCard.jsx'
import CreateBookButton from './CreateBookButton.jsx'
import CreateBookModal from './CreateBookModal.jsx'
import '../styles/books.scss'
import Modal from 'react-modal'

function BookContainer() {

  const [createBookModal, toggleCreate] = React.useState(false);
  const [loginModal, toggleLogin] = React.useState(true);
  
  function openModal() {
    toggleCreate(true);
  }
  function closeModal() {
    toggleCreate(false);
  }

  const dispatch = useDispatch();

  const bookData = useSelector(state => state.book.bookData);
  const bookArray = [];

  for(let i = 0; i < bookData.length; i++) {
    const newBook = <BookCard title={ bookData[i].title } author={ bookData[i].author }/>
    bookArray.push(newBook);
  }

  return (
    <div id='book-container'>
      <CreateBookButton toggleCreateModal={ openModal }/>
      <CreateBookModal createBookModal={ createBookModal } closeModal={ closeModal }/>
      {bookArray}
    </div>
  )
}

export default BookContainer