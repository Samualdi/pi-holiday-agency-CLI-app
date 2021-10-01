const axios = require("axios");

exports.planTripToAirport = (passengers, distanceToAirport) => {
  if (distanceToAirport === 0) return 0; //is this needed
  let numberOfVechiles = Math.ceil(passengers / 4);
  const costOfCar = (3 + 0.2 * distanceToAirport) * numberOfVechiles;
  const costOfTaxi = 0.4 * distanceToAirport * numberOfVechiles;

  if (costOfCar > costOfTaxi) {
    return {
      modeOfTransport: "Taxi",
      cost: costOfTaxi,
    };
  } else if (costOfTaxi > costOfCar) {
    return {
      modeOfTransport: "Car",
      cost: costOfCar,
    };
  } else if (costOfCar === costOfTaxi) {
    return {
      modeOfTransport: "Car or Taxi",
      cost: costOfCar,
    };
  }
};
