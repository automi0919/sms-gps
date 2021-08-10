import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllowSendLocationModal = (props: any) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Send your location to partner?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you willing to send your GPS location to your partner?
          If so, please press OK button.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={props.onOK}>OK</Button>
      </Modal.Footer>
    </Modal>
  )
}

interface PropTypes {
  onHide: () => void,
  onOK: () => void,
}
export default AllowSendLocationModal;