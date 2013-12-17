/*
 Return a middleware function. Uncomment the app variable to access
 things like app.config or app.logger. You can require your models here or access
 them from the app variable like app.models.model.

 Don't forget to make changes to middleware.js in order to load the middleware
 into the application. For organization's sake, don't call app.use(function(){}) here!
 */

module.exports = function( /*app*/ ){
  return function(req, res, next){
    next();
  };
};