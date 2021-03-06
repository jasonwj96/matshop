const configuration = {
  apiPath: "http://localhost:80/matshop/",
  // apiPath: "https://localhost:44347/api",
  emailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordRegex: /^(?=.*[0-9])(?=.{8,})/, //1 numeric, 8 minimum
  firstNameRegex: /^/, //
  lastNameRegex: /^/, //
  imageRepositoryUrl: "../assets/img/",
  coverImageUrls: {
    morning: "morning_cover.jpg",
    sunset: "sunset_cover.jpg",
    night: "night_cover.jpg"
  }
};

export default configuration;