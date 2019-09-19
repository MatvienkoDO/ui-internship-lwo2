export function followTheSpy(itineraries) {
  const delim = ', ';

  let lastItinerary = itineraries[0];
  let route = lastItinerary[0];

  while (lastItinerary) {
    route += delim + lastItinerary[1];

    lastItinerary = itineraries
        .find((itinerary) => lastItinerary[1] === itinerary[0]);
  }

  return route;
}
