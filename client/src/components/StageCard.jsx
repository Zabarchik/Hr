function StageCard({ title }) {
  return (

    <div className="card" style={{ width: "400px" }}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
      </div>
    </div>
  );
}
export default StageCard;
