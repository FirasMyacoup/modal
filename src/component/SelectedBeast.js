import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class Selectedbeast extends React.Component{
render(){

    return(
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <p>{this.props.description}</p>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>


    )
}

}

export default Selectedbeast;