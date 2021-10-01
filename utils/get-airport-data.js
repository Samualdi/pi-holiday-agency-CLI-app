const axios = require('axios');

exports.getAirportData = async () => {airportData = await axios("https://7302htasp6.execute-api.eu-west-1.amazonaws.com/v1/airport");
    const airportIdNameArray = airportData.data.map(airport => {
        return `${airport.name}: ${airport.id}`;
    })
    return airportIdNameArray.sort();
}
