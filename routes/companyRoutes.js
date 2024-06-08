const express = require('express');
const { createCompany, getCompanies } = require('../controllers/companyController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, createCompany);
router.get('/', getCompanies);

module.exports = router;
