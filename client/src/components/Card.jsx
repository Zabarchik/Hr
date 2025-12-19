import { Button, Nav } from "react-bootstrap";
import { NavLink } from 'react-router'; 

function CandidateCard({ name, surname, position, phone }) {
  return (

    <div className="card" style={{ width: "400px" }}>
      <div className="card-body">
        <h4 className="card-title">{surname}</h4>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{position}</p>
        <Button>
            <Nav.Link as={NavLink} to="/clientscard">
                          Подробнее
            </Nav.Link>
        </Button>
      </div>
    </div>
  );
}
export default CandidateCard;
