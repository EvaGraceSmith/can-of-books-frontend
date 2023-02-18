
import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Outlet } from "react-router-dom";





class App extends React.Component {


  render() {
    return (
      <>

        <Header />
        <Outlet />
        <Footer />

      </>
    );
  }
}


export default App;
