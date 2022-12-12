import React from 'react';

function BookCard(props) {
  // console.log('props', props);

  const [updateBook, toggleUpdate] = React.useState(false);
  
  function updateBook() {
    //render update input
    toggleUpdate(true);
  }
  
  function updateBookReq() {

  }

  function deleteBook() {
    const body = { user_id };
    const options = { method: 'DELETE', headers: { 'Content-Type': 'Application/JSON' }, body: JSON.stringify(body) };
    fetch('/deletebook', options)
    .then(res => {
      //close modal, redirect to home page to re-fetch data
    })
  }
  return (
    <div className='book-card'>
      <h4><span>Title: </span> {props.title}</h4>
      <h4><span>Author: </span>{props.author}</h4>

      {/* <button onClick={() => props.moreInfo(props.book_id) }>More Info</button> */}
      <button onClick={() => updateBook() }>Edit Book</button>
      <button onClick={() => deleteBook() }>Delete Book</button>
    </div>
  )
}

export default BookCard