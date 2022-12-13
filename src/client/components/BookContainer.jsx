import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setBooks } from '../redux/bookSlice'
import BookCard from './BookCard.jsx'
import CreateBookButton from './CreateBookButton.jsx'
import CreateBookModal from './CreateBookModal.jsx'
import Header from './Header'
import '../styles/books.scss'
import Modal from 'react-modal'
import BookShelf from './BookShelf'
import '../stylesheets/bookcard.scss'
function BookContainer() {
  const [createBookModal, toggleCreate] = React.useState(false)
  const [loginModal, toggleLogin] = React.useState(true)

  function openModal() {
    toggleCreate(true)
  }
  function closeModal() {
    toggleCreate(false)
  }

  //This method takes a flat array and turns it into an array of book row arrays
  //with each book row array containing upto 6 book cards.

  const renderBooks = () => {
    const bookData = useSelector((state) => state.book.bookData)
    const bookArray = []

    let bookRow = []
    for (let i = 0; i < bookData.length; i++) {
      const newBook = <BookCard bookData={bookData[i]} />
      // bookArray.push(newBook)
      bookRow.push(newBook)
      if (bookRow.length === 6) {
        bookArray.push(bookRow)
        bookRow = []
      }
      if (i === bookData.length - 1 && bookRow.length) {
        bookArray.push(bookRow)
      }
    }
    return bookArray.map((bookRow) => {
      return <BookShelf bookRow={bookRow} />
    })
  }
  return (
    <>
      <div id="book-container">
        <Header />
        <CreateBookButton toggleCreateModal={openModal} />
        <CreateBookModal
          createBookModal={createBookModal}
          closeModal={closeModal}
        />
        {/* {bookArray} */}
      </div>
      {renderBooks()}
    </>
  )
}

export default BookContainer
