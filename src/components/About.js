import React from 'react';
// import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';
import './About.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <>
                  <a href = '/'>Home</a>
                <main>
                    <h1>About Us</h1>
                    <h2>Chris Vander Linden</h2>
                    <h3>Software Developer</h3>
                    <h2>Eva Grace Smith</h2>
                    <h3>Software Developer</h3>

                </main>
            </>
        );

    }
}

export default Profile;
