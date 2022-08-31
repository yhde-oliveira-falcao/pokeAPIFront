import './App.css';
import React, { Component }  from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import FlexApi from 'twilio/lib/rest/FlexApi';



function App() {

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
