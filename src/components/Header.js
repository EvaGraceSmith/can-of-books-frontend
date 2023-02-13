import React from 'react';
// import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';
import { Navbar, NavItem } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import './Header.css';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render(){
        return(
            <>
                  <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {/* <li>
            <Link to="/blogs">Blogs</Link>
          </li> */}
          <li>
            <Link to='/AboutUs'>About Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
        <header>
          <h1> Books and More Books!</h1>

        </header>
            </>
        );

    }
}

export default Header;
