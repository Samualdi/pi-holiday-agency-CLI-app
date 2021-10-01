const axios = require("axios");

exports.planTripToAirport = (passengers, distance) => {
  if (distance === 0) return 0;
  let numberOfVechiles = Math.ceil(passengers / 4);
  const costOfCar = (3 + 0.2 * distance) * numberOfVechiles;
  const costOfTaxi = 0.4 * distance * numberOfVechiles;

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
  } else if (costofCar === costOfTaxi) {
    return {
      modeOfTransport: "Car or Taxi",
      cost: costOfCar,
    };
  }
};
