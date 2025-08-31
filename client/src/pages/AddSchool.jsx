import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddSchoolForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email_id: "",
    city: "",
    state: "",
    address: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("contact", formData.contact);
      data.append("email_id", formData.email_id);
      data.append("city", formData.city);
      data.append("state", formData.state);
      data.append("address", formData.address);
      data.append("image", formData.image[0]);

      const res = await axios.post("http://localhost:5000/schools/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Error adding school!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-3">
        <div
          className="card-header text-white text-center py-3"
          style={{ background: "linear-gradient(90deg, #ff6a00, #ee0979)" }}
        >
          <h3 className="mb-0">Add New School</h3>
        </div>
        <div className="card-body p-4">
          <form onSubmit={onSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">School Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter school name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Contact</label>
              <input
                type="text"
                name="contact"
                className="form-control"
                placeholder="Enter contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Email ID</label>
              <input
                type="email"
                name="email_id"
                className="form-control"
                placeholder="Enter email"
                value={formData.email_id}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">State</label>
              <input
                type="text"
                name="state"
                className="form-control"
                placeholder="Enter state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold">Address</label>
              <textarea
                name="address"
                className="form-control"
                rows="2"
                placeholder="Enter full address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold">Upload Image</label>
              <input
                type="file"
                name="image"
                className="form-control"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-lg text-white px-4"
                style={{
                  background: "linear-gradient(90deg, #ff6a00, #ee0979)",
                  border: "none",
                }}
              >
                Submit School
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
