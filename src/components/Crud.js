import React from  'react';
// import Form from 'react-bootstrap';
import Button from "react-bootstrap";
// import Modal from 'react-bootstrap';
import './Crud.css';




export class AddBooks extends React.Component{

    render(){
        return(

            // Start by creating an "Add Book" button component to your React app. When it's clicked, an application `state` property should be updated, indicating the "New Book" form should be revealed.            


<Button>
    Add Book!
</Button>

// Create a `BookFormModal` component that contains the form elements required to collect the user input needed for creating a new book. Reveal this modal when the "Add Book" button is clicked, and hide the modal when the modal is closed.


// When the form is submitted, use Axios to send a `POST` request to the server's `/books` endpoint, including the data from the form. The server should respond with the new book that was successfully saved, which you should pass up to the `BestBooks` component, save to state, to allow React to re-render the list of all books.



// Be sure your front end will handle any errors, in case something goes wrong.

        )
    }


}

