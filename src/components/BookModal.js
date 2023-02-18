import React from 'react';
import './BookModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class BookModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: '',
        };
    }

    render() {
        //console.log('in bookmodal'+ this.props.handleShow);
        return (
            <>


                <Modal show={this.props.show} onHide={this.props.handelDisplayAddModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Search by Title, Author, or Keyword to add a book!
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="string"
                                    placeholder="Book Title"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Author</Form.Label>
                                <Form.Control
                                    type="string"
                                    placeholder="Author"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Keyword</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Keyword"
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                        <Button variant="primary" onClick={this.props.handelDisplayAddModal}>
                            Search
                        </Button>
                        <DropdownButton variant="info" id="dropdown-basic-button" title="Results">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <p>Selected Result shows up here</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={this.props.handelDisplayAddModal}>
                            Add Book
                        </Button>
                        <Button variant="secondary" onClick={this.props.handelDisplayAddModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default BookModal;