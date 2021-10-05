# pi-holiday-agency-CLI-app

## Background

<b>Welcome to the PanIntelliegnce Holiday Agency app</b>

This project is a simple CLI application that allows the user to determine the cheapest method of travel for a given trip, including the cheapest mode of transport to the airport and the shortest flight between two airports. To do this the user must only answer four simple questions to supply the number of passengers, the distance to the origin airport and the relevant airports for the flight.

This repo contains the application built with Inquirer.js and all relevant functions for accessing data from the associated API and calculating the outputs. The application is set up in such a way, that as more airports and routes are added to the API database, the options in the app should automatically update. Testing was performed using Jest.

<b>The API documentation can be found here:</b> https://app.swaggerhub.com/apis-docs/panintelligence/panintelligence-travel-agency-api/ 

## Setup

## Cloning this repo
Before working with this project, you will need to fork and clone the repository to your local machine. To do this: 
- navigate to the main page of this repository and above the list of files click on the green code icon.
- Copy the URL displayed below "Clone with HTTPS".
- Use the git clone command followed by the URL in the command line on your machine.
- Enter you GitHub username and password (or token) to complete the cloning process if requested.

## Installing dependencies
<b>This repo was developed with Node.js v16.8.0, it is recommended that this, or a newer version of node is used.</b>

To install the dependencies for this repository:
- Navigate into the repository directory on your machine.
- Type <b>npm install</b> into the command line.

<b>Dependencies for this repository include:</b>
- Inquirer - (https://www.npmjs.com/package/inquirer)
- Axios - (https://www.npmjs.com/package/axios)
- jest (https://jestjs.io/)
- jest-sorted (https://www.npmjs.com/package/jest-sorted)

## Running the application
Once all dependencies have been installed, it should be possible to run the application directly from the terminal. To run the app:

- Ensure that you have navigated into the relevant directory (the directory created for this cloned repo).
- Type <b>npm start</b> into the command line. You should then see a series of prompts to supply the relevant information to calculate the cost of a trip.



## Running tests
To run the tests assocaited with this application:
- Type <b>npm test __tests__ </b>into the command line.