/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals({HandleClose,yesHandler,noHandler}) {
  return (
    <div>
      <Modal centered show={true} onHide={HandleClose} >
        <Modal.Header closeButton style={{border:'none'}}>
          <Modal.Title>Missing Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Is Chicken Breast Fillets, Boneless... urgent?</p>
        </Modal.Body>

        <Modal.Footer style={{border:'none'}}> 
          <Button onClick={yesHandler} variant="secondary">Yes</Button>
          <Button onClick={noHandler} variant="primary">No</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modals;