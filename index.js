const inquirer = require("inquirer");
const { createTripData } = require('./utils/create-trip-data');
const { getAirportData } = require('./utils/get-airport-data');


inquirer
  .prompt([
    {
      name: "distanceToAirport",
      message: `How far away is your origin airport?`,
      type: "number",
      validate: function (input) {
        if (input > 0) {
          return true;
        } else {
          return 'Must be a number greater than 0';
        }
      }
    },
    {
      name: "passengers",
      message: "How many passengers are travelling?",
      type: "number",
      validate: function (input) {
        if (input > 0) {
          return true;
        } else {
          return "Must be a number greater than 0";
        }
      }
    },
    {
      name: "originAirport",
      message: "What is your origin airport?",
      type: "list",
      choices: async function () {
        return await getAirportData();
      },
    },
    {
      name: "destinationAirport",
      message: "What is your departure airport?",
      type: "list",
      choices: async function () {
        return await getAirportData();
      },
    },
  ])
  .then((answers) => {
    const originAirport = answers.originAirport.substring(answers.originAirport.length -3, answers.originAirport.length);
    const destinationAirport = answers.destinationAirport.substring(answers.destinationAirport.length -3, answers.destinationAirport.length);
    return createTripData(
      answers.distanceToAirport,
      answers.passengers,
      originAirport,
      destinationAirport
    );
  })
  .then((result) => {
    console.info(
      `You should travel to the airport by -> ${result.tripToAirport.modeOfTransport}`
    );
    console.info(
      `Your outbound flight route is -> ${result.flightData.outboundFlight.journey}`
    );
    console.info(
      `Your inbound flight route is -> ${result.flightData.inboundFlight.journey}`
    );
    console.info(`The total cost of your trip is -> £${result.totalCost}`);
  });
  

       
