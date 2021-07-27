const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "",
    APISecret: "",
  },
  production: {
    APIKey: "wh4V3jn6SNKQqKgVs3EYw",
    APISecret: "bMwfUgc3IqOJa1vz9sWwu78H06sGZeKY",
    RedirectUrl: "http://localhost:3000/createNewMeeting"
  },
};

module.exports = config[env];
