
import React from 'react';
// import axios from "axios";
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import BestBooks from './components/BestBooks.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<App />} />
              <Route path="About" element={<About />} />
            </Route>
          </Routes>
          <BestBooks />
          <Footer />
        </Router>
      </>
    );
  }
}



{/* <Route
exact path="/"
element={<BestBooks />}
>
</Route>
<Route
exact path="/"
element={<About />}
>
</Route> */}


export default App;
