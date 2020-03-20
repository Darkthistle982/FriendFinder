const path = require("path");

module.exports = function(app) {
  app.get("/", function(request, response) {
    const viewHomePath = path.join(__dirname, "..", "public", "home.html");
    console.log(viewHomePath);
    response.sendFile(viewHomePath);

  });

  app.get("/survey", function(request, response) {
    const viewSurveyPath = path.join(__dirname, "..", "public", "survey.html");
    response.sendFile(viewSurveyPath);
  });
};
