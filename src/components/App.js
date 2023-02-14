
import React from 'react';
// import axios from "axios";
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import BestBooks from './BestBooks.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
      <a href= '/about'>About Us</a>
      <a href = '/'>Home</a>
      <Header />
      <BestBooks/>
      <Footer />
        {/* <Router>
          <Header />
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path="About" element={<About />} />
          </Routes>

         
        </Router> */}
      </>
    );
  }
}


              {/* <Route index element={<Home />} />
                <BestBooks/> */}
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

          {/* <Routes>
            <Route path="/" element={<Home/>}>
              <Route index element={<App />} />
              <Route path="About" element={<About />} />
            </Route>
          </Routes>
          <BestBooks /> */}


export default App;
