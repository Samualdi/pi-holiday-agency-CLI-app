const { findShortestFlights } = require('../utils/find-shortest-flights');
const { planTripToAirport } = require('../utils/plan-trip-to-airport');
const { createTripData } = require('../utils/create-trip-data');
const { getAirportData } = require('../utils/get-airport-data');

describe("planTripToAirport", () => {
  test("returns 0 when passed a distance of 0", () => {
    const distanceToAirport = 0;
    const passengers = 2;
    const actual = planTripToAirport(passengers, distanceToAirport);
    const expected = 0;

    expect(actual).toBe(expected);
  });

  test("returns the cheapest mode of transport and its cost whe passed a valid distance and a passenger value of less than 4 (a single car)", () => {
    let distanceToAirport = 100;
    let passengers = 3;
    let actual = planTripToAirport(passengers, distanceToAirport);
    let expected = {
      modeOfTransport: "Car",
      cost: 23,
    };

    expect(actual).toEqual(expected);

    distanceToAirport = 10;
    passengers = 4;
    actual = planTripToAirport(passengers, distanceToAirport);
    expected = {
      modeOfTransport: "Taxi",
      cost: 4,
    };

    expect(actual).toEqual(expected);
  });

  test("returns the cheapest mode of transport and its cost when passed a number of passengers requiring multiple cars", () => {
    let distanceToAirport = 100;
    let passengers = 5;
    let actual = planTripToAirport(passengers, distanceToAirport);
    let expected = {
      modeOfTransport: "Car",
      cost: 46,
    };

    expect(actual).toEqual(expected);

    distanceToAirport = 10;
    passengers = 15;
    actual = planTripToAirport(passengers, distanceToAirport);
    expected = {
      modeOfTransport: "Taxi",
      cost: 16,
    };

    expect(actual).toEqual(expected);
  });

  test("returns both modes of transport and the cost when both methods of transport cost the same", () => {
    let distanceToAirport = 100;
    let passengers = 5;
    let actual = planTripToAirport(passengers, distanceToAirport);
    let expected = {
      modeOfTransport: "Car",
      cost: 46,
    };

    expect(actual).toEqual(expected);
  });
});

describe('findShortestFlights', () => {
    test('returns flight data (route and totalMiles) for inbound and outbound flights when passed valid origin and departure airports', async () => {
        const originAirport = 'OSL';
        const destinationAirport = 'DME';
      const actual = await findShortestFlights(originAirport, destinationAirport);
      const expected = {
        outboundFlight: {
          journey: ["OSL", "LED", "SVO", "DME"],
          totalMiles: 505,
        },
        inboundFlight: {
          journey: ["DME", "LED", "OSL"],
          totalMiles: 510
        }
      };

      expect(actual).toEqual(expected);
    });
    
});

describe('createTripData', () => {
  test('returns a tripData object with properties that include flightData, information about the trip to the airport and total trip cost when passed valid arguments', async () => {
    const passengers = 4;
    const distanceToAirport = 150;
    const originAirport = 'OSL';
    const destinationAirport = 'DME';
    const actual = await createTripData(distanceToAirport, passengers, originAirport, destinationAirport);
    const expected = {
      flightData: {
        outboundFlight: { journey: ['OSL', 'LED', 'SVO', 'DME'], totalMiles: 505 },
        inboundFlight: { journey: ['DME', 'LED', 'OSL'], totalMiles: 510 },
      },
      tripToAirport: { modeOfTransport: "Car", cost: 33 },
      totalCost: "134.50",
    };
    expect(actual).toEqual(expected);
  });
})

describe('getAirportData', () => {
  test('returns an array of strings with airport code: airport name for all airports accessible in the API (sorted by airport code)', async () => {
    const airportData = await getAirportData();
    console.log(airportData.length);
    expect(airportData.length).toBe(20)
    expect(airportData).toBeSorted();

    
  });
  
});
