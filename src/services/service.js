const axios = require('axios');
const {
    findCountryPopulation,
    findCountryFlag
} = require('../utils/filterfunctions');

const getAllCountriesService = async () => {
    const { data } = await axios.get(`${process.env.COUNTRIES_BASE_URL}/AvailableCountries`);

    return data;
}

const getBorderedCountriesService = async (countryCode) => {
    const { data } = await axios.get(`${process.env.COUNTRIES_BASE_URL}/CountryInfo/${countryCode}`);

    return data;
}

const getCountryPopulationService = async (country) => {
    const { data } = await axios.get(`${process.env.COUNTRIES_DETAILS_URL}/population`);

    const countryPopulationData = findCountryPopulation(data.data, country);

    return countryPopulationData;
}

const getCountryFlagService = async (country) => {
    const { data } = await axios.get(`${process.env.COUNTRIES_DETAILS_URL}/flag/images`);

    const countryFlagData = findCountryFlag(data.data, country);

    return countryFlagData;
}

module.exports = {
    getAllCountriesService,
    getBorderedCountriesService,
    getCountryPopulationService,
    getCountryFlagService
}