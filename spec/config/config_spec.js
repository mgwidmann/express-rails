var should = require('should');

describe("config/config.js", function(){

  it("should load the configuration the current environment", function(){
    should(app.config).exist;
  });

  it("should load the configuration the environment in app.get('env')", function(){
    app.set('env', 'defaults');
    var newConfig = require('../../config/config')(app);
    should(newConfig).exist;
    newConfig.should.not.be.empty;
    app.set('env', 'test');
  });

});