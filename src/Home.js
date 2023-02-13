
import React from 'react';
// import axios from "axios";
import './Home.css';
import Header from './components/Header.js';
import BestBooks from './components/BestBooks.js';




class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>

    <Header/>
        <BestBooks />

      </>
    );
  }
}

export default Home;
