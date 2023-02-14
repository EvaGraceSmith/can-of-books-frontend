import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem ><Link to="/" className="nav-link" title="Home">Home</Link></NavItem>
        <NavItem><Link to="/About" className="nav-link">About Us</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    );
  }
}

export default Header;












// import React from 'react';
// // import axios from 'axios';
// // import Carousel from 'react-bootstrap/Carousel';
// import { Navbar, NavItem } from 'react-bootstrap';
// import { Row, Col, Container } from 'react-bootstrap';
// import { Outlet, Link } from 'react-router-dom';
// import './Header.css';



// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         };
//     }


//     render(){
//         return(
//             <>



// <div>
//         <Container>
//           <Row>
//             <Navbar
//               style={{ padding: 10, marginTop: '4%'}}
//               sm='auto'
//               collapseOnSelect
//               expand='lg'
//               bg="light" variant="light"
//             >
//               <Col md={{ span: 1, offset: 0 }} xs={{ span: 0, offset: 0 }}>
//                 <Image
//                   style={{
//                     width: 50,
//                     height: 50,
//                   }}
//                   src='https://image.pngaaa.com/626/1220626-middle.png'
//                   rounded
//                 />
//               </Col>
//               <Col md={{ span: 2, offset: 0 }} style={{marginRight:-30}}xs={{ span: 0, offset: 0 }}>
//                 <Navbar.Brand>BooksCan</Navbar.Brand>
//               </Col>
//               <Col md={{ span: 2, offset: 0 }}  style={{marginRight:-30}} xs={{ span: 0, offset: 0 }}>
//                 <NavItem>
//                   <Link className='nav-link' to='/'>
//                     Home
//                   </Link>
//                 </NavItem>
//               </Col>
//               <Col md={{ span: 1, offset: 0 }} style={{marginRight:-10}} xs={{ span: 0, offset: 0 }}>

//               </Col>
//               <Col md={{ span: 2, offset: 5 }} style={{marginRight:10}} xs={{ span: 0, offset: 0 }}>

//               </Col>
//             </Navbar>
//           </Row>
//         </Container>
//       </div>


//                   <nav>
//         <ul>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           {/* <li>
//             <Link to="/blogs">Blogs</Link>
//           </li> */}
//           <li>
//             <Link to='/AboutUs'>About Us</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//         <header>
//           <h1> Books and More Books!</h1>

//         </header>
//             </>
//         );

//     }
// }

// export default Header;
