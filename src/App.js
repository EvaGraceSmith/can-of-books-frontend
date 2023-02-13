
import React from 'react';
// import axios from "axios";
import './App.css';
import Header from './components/Header.js';
import BestBooks from './components/BestBooks.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<App/>} />
              <Route path="AboutUs" element={<AboutUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <Header /> */}
        <BestBooks />

      </>
    );
  }
}

export default App;
