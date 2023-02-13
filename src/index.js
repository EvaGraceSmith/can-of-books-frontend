import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.js';
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
        <Route path="/" element={ <Header/>}>
          <Route index element={<Home/>} /> 
          <Route path="AboutUs" element={<AboutUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>

      </>
    );
  }
}
//App is 'Home"













const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


