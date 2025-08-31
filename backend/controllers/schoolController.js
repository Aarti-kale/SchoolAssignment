const db = require("../db");

// Add School
exports.addSchool = (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file ? req.file.filename : null;

  const sql =
    "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sql,
    [name, address, city, state, contact, image, email_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "School added successfully!" });
    }
  );
};

// Get Schools

exports.getSchools = (req, res) => {
  const sql =
    "SELECT id, name, address,contact,state, email_id, city, image FROM schools";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    // Map image filename → full URL
    const schools = results.map((school) => ({
      ...school,
      image: school.image
        ? `http://localhost:5000/uploads/schoolImages/${school.image}` // full path
        : null,
    }));

    res.json(schools);
  });
};
