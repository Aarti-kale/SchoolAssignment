const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { addSchool, getSchools } = require("../controllers/schoolController");

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/schoolImages");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.post("/add", upload.single("image"), addSchool);
router.get("/", getSchools);

module.exports = router;
