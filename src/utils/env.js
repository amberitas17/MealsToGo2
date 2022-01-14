const liveHost = "https://us-central1-mealstogo-d9b2e.cloudfunctions.net";
const localHost = "http://localhost:5000/mealstogo-d9b2e/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
