const axios = require('axios');

exports.translateAirportCodes = async (airportCodeArray) => {
    airportData = await axios(
        "https://7302htasp6.execute-api.eu-west-1.amazonaws.com/v1/airport"
    );
    const refObject = {};
    airportData.data.forEach((airport) => {
        refObject[airport.id] = airport.name;
    });
  

    const translatedArray = airportCodeArray.map(airportCode => {
        return refObject[airportCode];
      
    })
    return translatedArray; 
}

