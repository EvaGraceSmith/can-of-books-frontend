import React from 'react';
// import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';
import './About.css';
import Header from './Header.js';
import Card from 'react-bootstrap/Card';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <>
                {/* <a href='/'>Home</a> */}
                <main>
                    {/* <Header /> */}

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Chris Vander Linden</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Full Stack Software Developer</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Linked In</Card.Link>
                            <Card.Link href="#">Github</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Eva Grace Smith</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Full Stack Software Developer</Card.Subtitle>
                            <Card.Text>
                            Using my love of web design, art, and people to make the world a better place, one page at a time.
                            </Card.Text>
                            <Card.Link href="https://www.linkedin.com/in/eva-grace-smith-99661125b/">Linked In</Card.Link>
                            <Card.Link href="https://github.com/EvaGraceSmith">Github</Card.Link>
                        </Card.Body>
                    </Card>
                    <h1>About Us</h1>


                </main>
            </>
        );

    }
}

export default Profile;
