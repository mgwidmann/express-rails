var should = require('should');
app = null;

before(function(){
  app = require('../app');
});

after(function(){
  app.get('server').close();
});

describe("app", function(){

  it("should have a global app variable in tests", function(){
    should(app).exist;
  });

  it("should define a logger in app", function(){
    should(app.logger).exist;
  });

  it("should define a config in app", function(){
    should(app.config).exist;
  });

  it("should have an accessible server variable", function(){
    should(app.get('server')).exist;
    should(app.server).exist;
  });

  it("should load the logger", function(){
    var level = app.logger.level;
    app.logger = null;
    app.logger = require('../config/initializers/logger')(app, level);
    should(app.logger).exist;
  });

  it("should not log info data to the console", function(){
    app.logger.level.should.equal('warn');
  });
});