const { planTripToAirport } = require('../utils/plan-trip-to-airport');


describe("planTripToAirport", () => {
  test("returns 0 when passed a distance of 0", () => {
    const distance = 0;
    const passengers = 2;
    const actual = planTripToAirport(passengers, distance);
    const expected = 0;

    expect(actual).toBe(expected);
  });

  test("returns the cheapest mode of transport and its cost whe passed a valid distance and a passenger value of less than 4 (a single car)", () => {
    let distance = 100;
    let passengers = 3;
    let actual = planTripToAirport(passengers, distance);
    let expected = {
      modeOfTransport: "Car",
      cost: 23,
    };

    expect(actual).toEqual(expected);

    distance = 10;
    passengers = 4;
    actual = planTripToAirport(passengers, distance);
    expected = {
      modeOfTransport: "Taxi",
      cost: 4,
    };

    expect(actual).toEqual(expected);
  });

  test("returns the cheapest mode of transport and its cost when passed a number of passengers requiring multiple cars", () => {
    let distance = 100;
    let passengers = 5;
    let actual = planTripToAirport(passengers, distance);
    let expected = {
      modeOfTransport: "Car",
      cost: 46,
    };

    expect(actual).toEqual(expected);

    distance = 10;
    passengers = 15;
    actual = planTripToAirport(passengers, distance);
    expected = {
      modeOfTransport: "Taxi",
      cost: 16,
    };

    expect(actual).toEqual(expected);
  });

  test("returns both modes of transport and the cost when both methods of transport cost the same", () => {
    let distance = 100;
    let passengers = 5;
    let actual = planTripToAirport(passengers, distance);
    let expected = {
      modeOfTransport: "Car",
      cost: 46,
    };

    expect(actual).toEqual(expected);
  });
});

