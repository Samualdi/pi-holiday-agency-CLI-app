const inquirer = require("inquirer");
const { planTripToAirport } = require('./utils/plan-trip-to-airport');
const { findShortestFlights } = require('./utils/find-shortest-flights');
const { createTripData } = require('./utils/create-trip-data');

inquirer
    .prompt([
        {
            name: "distanceToAirport",
            message: "How far away is your origin airport?",
            type: "number",
        },
        {
            name: "passengers",
            message: "How many passengers are travelling?",
            type: "input",
        },
        {
            name: "originAirport",
            message: "What is your origin airport?",
            type: "input",
        },
        {
            name: "destinationAirport",
            message: "What is your departure airport?",
            type: "input",
        },
    ])
    .then((answers) => {
        return createTripData(answers.distanceToAirport, answers.passengers, answers.originAirport, answers.destinationAirport);
    }).then((result) => {
        console.info(`You should travel to the airport by -> ${result.tripToAirport.modeOfTransport}`);
        console.info(`Your outbound flight route is -> ${result.flightData.outboundFlight.journey}`);
        console.info(`Your inbound flight route is -> ${result.flightData.inboundFlight.journey}`);
        console.info(`The total cost of your trip is -> £${result.totalCost}`);
    });

       
