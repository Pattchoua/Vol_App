const express = require("express");

const router = express.Router();

// Importing the upload Object from the multer configuration
const upload = require("../config/multer");

const {
  register,
  login,
  logout,
  getLoggedinOrganization,
} = require("../controllers/auth-organization");

const authenticate = require("../middlewaresOrga/authOrga");

router.post("/register", upload.single("image"), register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/currentOrganization", authenticate, getLoggedinOrganization);

module.exports = router;
