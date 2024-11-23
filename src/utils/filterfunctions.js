const findCountryPopulation = (countriesList, countryToFind) => {
    return countriesList.find(({ country }) => country.toLowerCase() === countryToFind.toLowerCase());
}

const findCountryFlag = (countriesList, countryToFind) => {
    return countriesList.find(({ name }) => name.toLowerCase() === countryToFind.toLowerCase());
}

module.exports = {
    findCountryPopulation,
    findCountryFlag
}