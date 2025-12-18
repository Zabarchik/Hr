function CandidateCard({ name, surname, position, phone }) {
  return (

    <div className="card" style={{ width: "400px" }}>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h5 className="card-title">{surname}</h5>
        <p className="card-text">{position}</p>
         <p className="card-text">{phone}</p>
      </div>
    </div>
  );
}
export default CandidateCard;
