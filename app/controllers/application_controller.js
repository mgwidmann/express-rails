/*
  Return an Object of controller functions. Uncomment the app variable to access
  things like app.config or app.logger. You can require your models here or access
  them from the app variable like app.models.file where file is the file name of
  the model.

  Don't forget to make changes to routes.js in order to hook the URL into the
  function defined here!
 */

module.exports = function( /*app*/ ){
  return {
    index: function(req, res){
      res.json({

      });
    }
  };
};