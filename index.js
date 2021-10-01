const inquirer = require("inquirer");
const {planTripToAirport} = require('./utils/plan-trip-to-airport');

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
    
    
  });
