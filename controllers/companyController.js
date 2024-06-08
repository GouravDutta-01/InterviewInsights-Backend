const Company = require('../models/Company');

exports.createCompany = async (req, res) => {
  const { name, overview, interviewDifficulty, commonQuestions } = req.body;

  try {
    const newCompany = new Company({
      name,
      overview,
      interviewDifficulty,
      commonQuestions,
    });

    const company = await newCompany.save();
    res.json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
