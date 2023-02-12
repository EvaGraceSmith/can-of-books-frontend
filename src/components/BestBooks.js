import React from 'react';
import axios from 'axios';

// import ListGroup from 'react-bootstrap/ListGroup';
let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }

    getBooks = async () => {
        //console.log(SERVER);
        try {
            let results = await axios.get(`${SERVER}/books`);
            console.log('do we have books', results);
            this.setState({
                books: results.data,
            });
        } catch (error) {
            console.log('we have an error: ', error.response.data);
        }
    };

    componentDidMount() {
        this.getBooks();
    }

    render() {
        this.getBooks();
        console.log(this.state.books);
        let books = this.state.books.map((book) => (
            <p key={book._id}>
                {book.title} is about {book.description}
            </p>
        ));
        return (
            <>

                <main>{this.state.books.length > 0 && <>{books}</>}</main>

            </>
        );
    }


}




export default BestBooks;
