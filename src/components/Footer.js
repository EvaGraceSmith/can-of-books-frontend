import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand> &copy; 2023 Eva Grace Smith & Chris Vander Linden</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
