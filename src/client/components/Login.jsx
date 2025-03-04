import React, { useState } from 'react';
import Modal from './Modal';
import { CURRENT_SCREEN_MAP } from '../App';

const Login = (props) => {
  //USING REACT HOOKS TO MAINTAIN STATE FOR USERNAME AND PASSWORD
  //decalaring a constant, destructuring an array, generated by invoking useState hook.
  //the first constant will be the username state itself
  //The second constant will be the setter method
  //assiging it the value of useState invoked with a default empty string
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginRequest = async () => {
    const requestBody = {
      username,
      password,
    };
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      console.log(data);
      if (data) {
        props.setUser(data.user);
        props.setBooks(data.userBooks);

        //use redux dispatch to update redux store 'bookDate'
        //also set 'user state' in redux store to current user_id
        props.setCurrentScreen(CURRENT_SCREEN_MAP.bookContainer);
      }
    } catch (err) {
      console.log(err);
      window.alert(err);
    }
    // props.setCurrentScreen(CURRENT_SCREEN_MAP.bookContainer)
  };

  // console.log(props)
  return (
    <Modal>
      <div className='login'>
        <label>
          Username
          <input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            type='text'
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type='password'
          />
        </label>
        <button disabled={!username || !password} onClick={loginRequest}>
          Log In
        </button>
        <div className='divider' />
        <button
          className='create-user'
          // button is disabled unless user has entered all the required fields
          onClick={() => {
            props.setCurrentScreen(CURRENT_SCREEN_MAP.createUser);
          }}
        >
          Click here to Sign Up
        </button>
      </div>
    </Modal>
  );
};

export default Login;
