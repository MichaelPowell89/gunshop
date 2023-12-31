// pages/_app.js
import React from 'react';
import '../styles/globals.css';
import Navbar from './components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;