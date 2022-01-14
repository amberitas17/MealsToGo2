import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://5a8f-122-2-97-13.ngrok.io/mealstogo-d9b2e/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
