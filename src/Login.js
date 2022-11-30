import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import logo from './assets/logo.png';
import { useDispatch } from 'react-redux';
import { auth, provider } from './firebase';
import { login } from './features/appSlice';

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () => {
         auth.signInWithPopup(provider).then(result => {
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
            }))
         }).catch(error => alert(error.message));
    };

  return (
    <div className='login'>
        <div className="login__container">
            <img src={logo} alt='' />
            <Button variant='outlined' onClick={signIn} >Sign in</Button>
        </div>
    </div>
  )
}

export default Login