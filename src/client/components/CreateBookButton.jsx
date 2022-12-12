import React from 'react';
import addIcon from '../icons/add.png'
// import { useSelector, useDispatch } from 'react-redux'
// import { getBooks, createBook, updateBook, deleteBook } from '../redux/counterSlice'

function CreateBookButton(props) {
  // console.log('props', props.toggleCreateModal);
  return (
    <div id='add-book'>
      <img src={addIcon} onClick={props.toggleCreateModal}></img>
    </div>
  )
}

export default CreateBookButton