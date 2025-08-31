import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ShowSchools />} />
          <Route path="/add" element={<AddSchool />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
