import { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router';
import ModalWindow from './ui/ModalWindow';

function CandidateCard({ name, surname, position, phone }) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <ModalWindow
        show={showModal}
        handleClose={handleClose}
        name={name}
        surname={surname}
        position={position}
        phone={phone}
      />
      <div className="card" style={{ width: '400px' }}>
        <div className="card-body">
          <h4 className="card-title">{surname}</h4>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{position}</p>
          <Button>
            <Nav.Link
              onClick={() => {
                setShowModal(true);
              }}
            >
              Подробнее
            </Nav.Link>
          </Button>
        </div>
      </div>
    </>
  );
}
export default CandidateCard;
