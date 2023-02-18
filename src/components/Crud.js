import React from 'react';
import axios from 'axios';
import './BestBooks.css';

class Crud extends React.Component {

  constructor (props) {
    super(props);
    this.state = 
      { 
        bookData: [],
        searchBookData: [],
        bookToPost: {},
        searchBook: '',
        selectedBookGoogleID: '',
        activeTextSearch: true,
        disableSearch: true
      }
  }

  handleBookSearchText = (event) => {
    // lexical scope shouldn't be required since I'm not passing as a prop
    this.setState(
      {
      activeTextSearch: true,
      searchBook: event.target.value,
      disableSearch: event.target.value === ''
    })
  }

  handleBookSearchSelect = (event) => {
    // lexical scope shouldn't be required since I'm not passing as a prop
    this.setState({
      selectedBookGoogleID: event.target.value,
      disableSearch: event.target.value === ''
    })
  }

  handleBookSearchSubmit = (event) => {
    event.preventDefault();

    if (this.state.selectedBookGoogleID && !this.state.activeTextSearch) {
      
      const bookToPost = this.state.searchBookData.filter(book => book.googleBookID === this.state.selectedBookGoogleID)[0];
      // set this book in state for possible future reference.
      this.setState({bookToPost});

      // POST BOOK HERE!!!
      console.log('POST', bookToPost);

      return;
    
    };

    axios.get(`${process.env.REACT_APP_RENDERURL}/searchBooks/?search=${this.state.searchBook}`).then(data => {
        console.log(data.data);
          this.setState({ searchBookData: data.data,
          disableSearch: true,
          activeTextSearch: false,
          selectedBookGoogleID: ''
        });
      }
    );
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_RENDERURL}/books`).then(data => this.setState({ bookData: data.data }));
  }

  render() {

    const postedBook = 
    <div id="addedBook">
      <h3>You just added this book!</h3>
      {this.state.bookToPost.title}<br />
      {this.state.bookToPost.author}<br />
      <img src={this.state.bookToPost.image} alt={this.state.bookToPost.title}/><br />
      {this.state.bookToPost.description}
    </div>

    const searchResults = this.state.searchBookData?.length !== 0 ? [<option value="" disabled selected>Select a book from the dropdown...</option>,...this.state.searchBookData.map(book => (
      <option key={book.googleBookID} value={book.googleBookID}>{ book.title} ({ book.author})</option>
    ))] : <option value="" disabled selected>Search above...</option>;

    const books = this.state.bookData.map(book => (
      <li key={ book._id }>{ book.title }: { book.description }, { book.status }</li>
    ));
  
    return (
      <div id='bestBookContainer' class='contentContainer'>
        <h2>Books</h2>
        <h3>Search/Submit:</h3>
        <form onSubmit={this.handleBookSearchSubmit}>

          <label htmlFor="searchBook">Search a book:</label>
          <input id="searchBook" name="searchBook" type="text" onChange={this.handleBookSearchText} value={this.state.searchBook} placeholder="Type a book..."/>

          <label htmlFor="selectBook">Choose a book:</label>
          <select id="selectBook" name="selectBook" placeholder="Search for a book" onChange={this.handleBookSearchSelect} value={this.state.selectedBookGoogleID}>
            {searchResults}
          </select>

          <input type="submit" value="Search/Submit" disabled={this.state.disableSearch}/>
        </form>

        {this.state.bookToPost.title && postedBook}

        <h3>Total Results:</h3>
        <ul>
          { books }
        </ul>
      </div>
    )
  }
}

export default Crud;

