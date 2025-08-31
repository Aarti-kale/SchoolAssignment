import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/schools")
      .then((res) => {
        setSchools(res.data);
      })
      .catch((err) => {
        console.error("Error fetching schools:", err);
      });
  }, []);

  return (
    <div className="container mt-5">
      {/* Header */}
      <div
        className="text-white text-center py-3 mb-4 rounded-3 shadow-sm"
        style={{ background: "linear-gradient(90deg, #ff6a00, #ee0979)" }}
      >
        <h2 className="mb-0">🏫 Schools List</h2>
      </div>

      {/* School Cards */}
      <div className="row">
        {schools.length > 0 ? (
          schools.map((school) => (
            <div className="col-md-4 mb-4" key={school.id}>
              <div className="card shadow-lg border-0 rounded-3 h-100">
                <img
                  src={school.image}
                  alt={school.name}
                  className="card-img-top rounded-top-3"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-dark">
                    {school.name}
                  </h5>
                  <p className="card-text text-muted mb-2">
                    {school.address}, {school.city}
                    {school.contact}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No schools available.</p>
        )}
      </div>
    </div>
  );
}
