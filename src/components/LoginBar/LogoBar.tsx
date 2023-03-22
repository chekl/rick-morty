import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './LogoBar.scss';

export default function LogoBar() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [isLogining, setIsLogining] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (res) => setToken(res.access_token),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          setEmail(res.data.email);
          setIsLogining(true);
          localStorage.setItem('token', token);
          localStorage.setItem('email', res.data.email);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  const logOut = () => {
    googleLogout();
    setIsLogining(false);
    setEmail('');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  return (
    <div className='logobar-container'>
      {isLogining ? (
        <button className='log-button log-text' onClick={() => logOut()}>
          Logout
        </button>
      ) : (
        <button className='log-button log-text' onClick={() => login()}>
          Login by Google
        </button>
      )}
      <p className='log-text'>{email}</p>
    </div>
  );
}
