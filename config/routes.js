/*
  Hook up routes to controller actions here. The app variable is provided
  for you to connect the route, method and controller action (function).
 */

module.exports = function(app){
  app.get('/', app.controllers.application.index);
};