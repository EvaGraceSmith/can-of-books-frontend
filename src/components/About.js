import React from 'react';
import './About.css';
import EvaGrace from '../img/EvaGrace.jpeg'
import Chris from '../img/ChrisVanderLinden.png'
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
                <div className='aboutUs'>
                    <div className='cardWrap'>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={EvaGrace} alt="Eva Grace"
                                        className='photoImage'
                                    // style={{width:'60%',
                                    // height:'70%',
                                    // padding:'15%'}}
                                    />
                                </div>
                                <div className="flip-card-back">
                                    <div className='textBox'>
                                    <h1>Eva Grace Smith</h1>
                                    <p>Full Stack Software Developer</p>
                                    <p>Using my love of web design, art, and people to make the world a better place, one page at a time.</p>
                                    <p>Favorite Book:</p>
                                    <p>Watership Down</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Chris} alt="Chris Vander Linden"
                                        className='photoImage'
                                    // style={{width:'60%',
                                    // height:'70%',
                                    // padding:'15%'}}
                                    />
                                </div>
                                <div className="flip-card-back">
                                <div className='textBox'>
                                    <h1>Chris Vander Linden</h1>
                                    <p>Full Stack Software Developer</p>
                                    <p>We love that guy</p>
                                    <p>Favorite Book</p>
                                    <p>It</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    }
}

export default Profile;


{/* <Card style={{ width: '18rem' }}>
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
<h1>About Us</h1> */}
