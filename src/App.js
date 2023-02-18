
import React from 'react';
// import axios from "axios";
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
// import BestBooks from './components/BestBooks.js';
// import { Routes, Route } from 'react-router-dom';
// import About from './components/About.js';
import { Outlet } from "react-router-dom";





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>

<Header />
        <Outlet />

        <Footer />

        {/* <Router> */}
          {/* <Header /> */}
          {/* <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<App />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>

          <BestBooks /> */}

        {/* </Router> */}
      </>
    );
  }
}


export default App;
