import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import Home from '../components/Home';
import LoginBack from '../components/LoginBack';

function HomePage() {
  return (
    <div className="flex mb-4 bg-indigo-800 h-screen">
      <Home />
      <LoginBack />
    </div>
  );
}

export default HomePage;
