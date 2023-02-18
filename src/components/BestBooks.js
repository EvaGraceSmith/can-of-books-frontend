import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import BookModal from './BookModal.js'


// import ListGroup from 'react-bootstrap/ListGroup';
let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            error: false,
            errorMessage: '',
            showModal: false,
        };
    }

    getBooks = async () => {
        //console.log(SERVER);
        try {
            let results = await axios.get(`${SERVER}/books`);
            console.log('do we have books', results);
            this.setState({
                books: results.data,
                error: false,
            });
        } catch (error) {
            console.log('empty book collection: ', error.response.data);
            this.setState({
                error: true,
                errorMessage: `The book collection is empty: ${error.response.status}`,
              });
              console.error(error);
        }
    };

    componentDidMount() {
        this.getBooks();
    } 
    handelDisplayAddModal= () => {
           // e.preventDefault();
            console.log('The link was clicked.');
        this.setState({showModal:!this.state.showModal});
    }

    render() {

        console.log(this.state.books);

        let books = this.state.books.map((book) => (

            <Carousel.Item key={book._id}>
            <div className='addBookNav'>

            </div>
                <img
                    className="d-block w-100"
                    src={require('../img/books-5937823_640.jpg')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                </Carousel.Caption>

            </Carousel.Item>
        ));


        return (
            
            <>
            <div className='addBookNav'>
            <Button variant="secondary" onClick={this.handelDisplayAddModal} >Add a Book</Button>{' '}
            </div>
            {(this.state.showModal) && 
            <BookModal 
            show={this.state.showModal}
            getBooks={this.getBooks}
            handelDisplayAddModal={this.handelDisplayAddModal}

            />}
<div className='libraryMain'>
                    {(this.state.error) &&
                        <Alert key='info' variant='info' show="true" transition="false" >The book collection is empty {this.state.errorMessage} </Alert>
                      }
                    {this.state.books.length > 0 &&
                    <>
                        <Carousel fade
                        variant="dark"
                            className="carousel">
                            {books}
                        </Carousel>
                    </>
    }
</div>
            </>
        );
    }


}




export default BestBooks;

