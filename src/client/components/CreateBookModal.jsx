import React from 'react';
import '../styles/books.scss'
import Modal from 'react-modal'

function CreateBookModal(props) {
  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

  const [author, newAuthor] = React.useState('');
  const [title, newTitle] = React.useState('');
  const [genre, newGenre] = React.useState('');

  function createBookReq() {
    const body = { author, title, genre };
    const options = { method: 'POST', headers: { 'Content-Type': 'Application/JSON' }, body: JSON.stringify(body) };
    fetch('/addbook', options)
    .then(res => {
      //close modal, redirect to home page (which re-fetchs?)
    })
    .catch(err => {

    })
  }

  return (
    <Modal
      isOpen={props.createBookModal}
      onAfterOpen={afterOpenModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Add Book"
      // createBook={ createBook } 
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={props.closeModal}>Cancel</button>
      <div>Add Book</div>
      <form>
        <input type='text' placeholder='Title' onChange={(e) => newTitle(e.target.value)}/>
        <input type='text' placeholder='Author' onChange={(e) => newAuthor(e.target.value)}/>
        <div className="">
          <select onChange={(e) => newGenre(e.target.value)}>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="biography">Biography</option>
          </select>
        </div>  
      </form>
      <button onClick={() => createBookReq()}>Add Book</button>

    </Modal>
  )
}

export default CreateBookModal