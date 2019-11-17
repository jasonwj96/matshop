const configuration = {
  apiPath: "https://localhost:5001/api",
  // apiPath: "https://localhost:44347/api",
  emailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordRegex: /^(?=.*[0-9])(?=.{8,})/, //1 numeric, 8 minimum
  firstNameRegex: /^/, //
  lastNameRegex: /^/, //
  coverImageUrls: {
    morning: "./morning_cover.jpg",
    sunset: "./sunset_cover.png",
    night: "./night_cover.png"
  }
};

export default configuration;