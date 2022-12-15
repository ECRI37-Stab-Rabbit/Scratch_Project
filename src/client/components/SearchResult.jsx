import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBooks } from '../redux/bookSlice';
import Modal from './Modal';
import '../styles/books.scss';

const SearchResult = (props) => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function addBook(e) {
    e.preventDefault();
    const book = {
      title: props.bookData.title,
      author: props.bookData.author,
      pictureURL: props.bookData.pictureURL,
      user_id: props.userID.user_id,
    };
    fetch('http://localhost:3000/books/add', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ book }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('data in search results', data);
        dispatch(setBooks(data));
      })
      .then(() => props.closeModal());
  }

  return (
    <div className="SearchResult">
      <img src={props.bookData.pictureURL} />
      <p>{props.bookData.title}</p>
      <p>{props.bookData.author}</p>
      <button onClick={addBook}>Add</button>
    </div>
  );
};

export default SearchResult;
