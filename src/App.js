
import React from 'react';
// import axios from "axios";
import './App.css';
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
        <header>
          <h1> Books and More Books!</h1>

        </header>
  
        <BestBooks />

      </>
    );
  }
}

export default App;
