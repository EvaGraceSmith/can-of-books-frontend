import React from 'react';
import axios from 'axios';
import './BookModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: '',
            searchBookData: [],
            bookToPost: {},
            searchBook: '',
            selectedBookGoogleID: '',
            activeTextSearch: true,
            disableSearch: true
        };
    }
    handleBookSearchText = (event) => {
        console.log(event.target.searchTerm.value)
        //console.log('handleBookSearchText' + formDataObj.searchTerm);
        let searchBook = event.target.searchTerm.value;
        this.setState(
            {
                activeTextSearch: true,
                searchBook: searchBook,
                disableSearch: searchBook === ''
            })
        event.preventDefault();

        axios.get(`${process.env.REACT_APP_SERVER}/searchBooks/?search=${searchBook}`).then(data => {
            console.log(data.data);
            this.setState({
                searchBookData: data.data,
                disableSearch: true,
                activeTextSearch: false,
                selectedBookGoogleID: ''
            });
        }
        );
    }


    handleBookSearchSelect = (event) => {
        console.log('handleBookSearchSelect' + event.target.value);
        let selectedBookGoogleID = event.target.value;
        this.setState({
            selectedBookGoogleID: event.target.value,
            disableSearch: event.target.value === ''
        });

        if (selectedBookGoogleID && !this.state.activeTextSearch) {

            const bookToPost = this.state.searchBookData.filter(book => book.googleBookID === selectedBookGoogleID)[0];
            // set this book in state for possible future reference.
            this.setState({ bookToPost });

            // POST BOOK HERE!!!
            console.log('POST', bookToPost);
            const reqBody = {
                title: bookToPost.title,
                author: bookToPost.author,
                image: bookToPost.image,
                description: bookToPost.description,
                status: true,
            };
            console.log('POST reqBody', reqBody);
            axios
                .post(`${process.env.REACT_APP_SERVER}/books`, reqBody)
                .then(console.log("post success??"))
                .catch((error) => console.log('post error' + error));

        };
    }


    render() {
        //console.log('in bookmodal'+ this.props.handleShow);
        const postedBook =
            <div id="addedBook">
                <h3>Book to add:</h3>
                {this.state.bookToPost.title}<br />
                {this.state.bookToPost.author}<br />
                <img src={this.state.bookToPost.image} alt={this.state.bookToPost.title} /><br />
                {this.state.bookToPost.description}
            </div>

        const searchResults = this.state.searchBookData?.length !== 0 ? [<option value="" disabled selected>Select a book from the dropdown...</option>, ...this.state.searchBookData.map(book => (
            <option key={book.googleBookID} value={book.googleBookID}>{book.title} ({book.author})</option>
        ))] : <option value="" disabled selected>Search above...</option>;


        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handelDisplayAddModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Search by Keyword to find a book.
                        <Form onSubmit={this.handleBookSearchText} onSearch={this.handleBookSearchSelect}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    name='searchTerm'
                                    type="string"
                                    placeholder="Keyword"
                                    autoFocus
                                />
                                <br></br>
                                                            <Button variant="primary"
                                type='submit'>
                                Search
                            </Button>
                            </Form.Group>

                            <Form.Label>Choose a Book</Form.Label>

                            <Form.Select aria-label="Default select example"
                                onChange={this.handleBookSearchSelect}>
                                {searchResults}
                            </Form.Select>

                        </Form>

                        <div>
                            {this.state.bookToPost.title && postedBook}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={this.props.handelDisplayAddModal}>
                            Add Book
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default BookModal;