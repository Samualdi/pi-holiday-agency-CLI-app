const axios = require('axios');

exports.findShortestFlights = async (originAirport, destinationAirport) => {
    const outboundFlight = await axios(`https://7302htasp6.execute-api.eu-west-1.amazonaws.com/v1/airport/${originAirport}/to/${destinationAirport}`);

    const inboundFlight = await axios(`https://7302htasp6.execute-api.eu-west-1.amazonaws.com/v1/airport/${destinationAirport}/to/${originAirport}`);

    return {
        outboundFlight: {
            journey: outboundFlight.data.journey,
            totalMiles: outboundFlight.data.miles.reduce((a, b) => a + b, 0)
        },
        inboundFlight: {
            journey: inboundFlight.data.journey,
            totalMiles: inboundFlight.data.miles.reduce((a, b) => a + b, 0)
    }}
};
