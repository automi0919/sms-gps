import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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
          SHARE YOUR GPS LOCATION?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ARE YOU WILLING TO SHARE YOUR ONE-TIME GPS LOCATION VIA SAFE LOCATE? 
        </p>
        <Link to='/privacy' className="link">PRIVACY POLICY</Link>

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