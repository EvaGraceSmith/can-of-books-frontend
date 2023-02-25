import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <div className='container'>
        <Navbar.Brand className='footer'> &copy; 2023 Eva Grace Smith & Chris Vander Linden</Navbar.Brand>
        </div>
      </Navbar>
    );
  }
}

export default Footer;
