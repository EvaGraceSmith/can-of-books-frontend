
import React from 'react';
// import axios from "axios";
import './App.css';
import Header from './components/Header.js';
import BestBooks from './components/BestBooks.js';



class App extends React.Component {
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

export default App;
