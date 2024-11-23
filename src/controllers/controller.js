const {
    getAllCountriesService,
    getBorderedCountriesService,
    getCountryPopulationService,
    getCountryFlagService
} = require('../services/service');

const getAllCountries = async (req, res) => {
    try {
        const data = await getAllCountriesService();

        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e.message);
        res.json({ status: 'error', data: e.message });
    }
}

const getBorderedCountries = async (req, res) => {
    const { countryCode } = req.params;
    try {
        const data = await getBorderedCountriesService(countryCode);

        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e.message);
        res.json({ status: 'error', data: e.message });
    }
}

const getCountryPopulation = async (req, res) => {
    const { country } = req.params;
    try {
        const data = await getCountryPopulationService(country);

        if (!data) {
            return res.json({ status: 'error', data: 'can not find country' });
        }

        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e.message);
        res.json({ status: 'error', data: e.message });
    }
}

const getCountryFlag = async (req, res) => {
    const { country } = req.params;
    try {
        const data = await getCountryFlagService(country);

        if (!data) {
            return res.json({ status: 'error', data: 'can not find country' });
        }

        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e.message);
        res.json({ status: 'error', data: e.message });
    }
}

module.exports = {
    getAllCountries,
    getBorderedCountries,
    getCountryPopulation,
    getCountryFlag

};