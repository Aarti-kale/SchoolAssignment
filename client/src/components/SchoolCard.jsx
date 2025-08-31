import React from "react";

function SchoolCard({ school }) {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={`http://localhost:5000/schoolImages/${school.image}`}
          className="card-img-top"
          alt={school.name}
        />
        <div className="card-body">
          <h5 className="card-title">{school.name}</h5>
          <p className="card-text">
            {" "}
            {school.city} ,{school.contact}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;
