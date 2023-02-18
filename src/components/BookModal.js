import React from 'react';
import './BookModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
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