import Spinner from 'react-bootstrap/Spinner';

function Spinnerapp() {
  return (
    <Spinner animation="border" role="status" size='sm' variant="info">
      <span className="visually-hidden"></span>
    </Spinner>
  );
}

export default Spinnerapp;