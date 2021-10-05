const { planTripToAirport } = require('./plan-trip-to-airport');
const { findShortestFlights } = require('./find-shortest-flights');
const { translateAirportCodes } = require('./translate-airport-codes');

exports.createTripData = async (distanceToAirport, passengers, originAirport, destinationAirport) => {
    const flightData = await findShortestFlights(originAirport, destinationAirport)
    const tripToAirport = planTripToAirport(passengers, distanceToAirport);

    const totalCost = tripToAirport.cost + ((flightData.outboundFlight.totalMiles + flightData.inboundFlight.totalMiles) * 0.1 * passengers);
    flightData.outboundFlight.journey = await translateAirportCodes(
      flightData.outboundFlight.journey
    );

    flightData.inboundFlight.journey = await translateAirportCodes(
      flightData.inboundFlight.journey
    );

    const tripData = {
        flightData: flightData,
        tripToAirport: tripToAirport,
        totalCost: totalCost.toFixed(2)
    }
    return tripData;
}
