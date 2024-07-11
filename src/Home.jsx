import React from 'react';

import {  Blog, Possibility, Features, WhatOko, Header } from './containers';
import { CTA, Brand } from './components';
import './App.css';

const Home = () => {
  return (
      <div className="App">
        <Header />
        <Brand />
        <WhatOko />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
      </div>

  );
};

export default Home;