var should = require('should');
var fs = require('fs');

describe("config/boot_spec.js", function(){

  it("should load all files in app/controllers", function(){
    if(fs.existsSync('./app/controllers/application_controller.js')){
      should(app.controllers.application).exist;
      app.controllers.application.should.not.be.empty;
    }
  });

  it("should load all files in app/models", function(){
    if(fs.existsSync('./app/models/example.js')){
      should(app.models).exist;
      should(app.models.example).exist;
    }
  });

  it("should load all files in app/models", function(){
    if(fs.existsSync('./app/middleware/example.js')){
      should(app.middleware).exist;
      should(app.middleware.example).exist;
    }
  });

  it("should load all files in config/initializers", function(){
    should(app.logger).exist;
  });

});