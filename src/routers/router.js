const express = require('express');
const {
    getAllCountries,
    getBorderedCountries,
    getCountryFlag,
    getCountryPopulation
} = require('../controllers/controller');

const router = express.Router();

router.get("/countries", getAllCountries);
router.get("/countries/bordered/:countryCode", getBorderedCountries);
router.get("/countries/population/:country", getCountryPopulation);
router.get("/countries/flag/:country", getCountryFlag);

module.exports = router;