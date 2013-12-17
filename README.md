express-rails
=============

A template express application which is organized like a typical Rails application with minimal production dependencies.

The purpose of this project is to just provide a simple express template which has a included reloadable server, a configured testing framework which auto-watches all files, JSHint integration, environment based application configuration and the auto-require capability built into Rails.

# Installation

    git clone git@github.com:mgwidmann/express-rails.git <YOUR_PROJECT_NAME>
    cd <YOUR_PROJECT_NAME> && rm -rf ./.git && npm install

Create your git repo out of the <YOUR_PROJECT_NAME> folder.

## Running

To run the server simply run the default grunt task:

    grunt

To run the test watcher simply run:

    grunt test

# The `app` variable

In this project the app variable is passed into every file when it gets required. Since all files are required automatically by `config/boot.js`, the `app` variable acts as a global without actually being global. Each file should export a function which takes an `app` variable. If the file does not export a function, it will not hurt anything, you'll just lose access to the `app` variable.

## Environment variables

An example of running the application without using `grunt` is:

    LEVEL=info PORT=3000 NODE_ENV=development node app.js

* LEVEL - Sets the logging level. Available levels are (lowest to highest) verbose, debug, info, warning, error, fatal. This can be changed by editing `config/initializers/logger.js`.
* PORT - The port the node application should run on.
* NODE_ENV - The node environment.

## Importance of the `app` variable

### Logging

Logging is provided by (https://github.com/flatiron/winston) and is automatically loaded into `app.logger`. If you want to log anything, anywhere in your application, you'll need the `app` variable. Use it like so:

    app.logger.info("This message provides information");
    app.logger.debug("This message provides debug data");
    app.logger.error("THIS MESSAGE IS AN ERROR!");

`app.logger` can be configured in config/initializers/logger.js if different winston settings are desired.

The log level can be changed by setting the `LEVEL` environment variable.

### Environment Configuration

Configuration is automatically required based on the currently set `NODE_ENV`. The exports in config/environments/<NODE_ENV>.js will be placed into the `app` variable at `app.config`. The file `config/environments/defaults.js` is intended to hold your default configuration. In each environemnt file, simply require that file and overwrite the values you want to change. This makes a cleaner configuration setup that doesn't require performing deep merges or clones of configuration that is the same for multiple environments.

# Controllers

Controllers are located in the app/controllers directory and the file name is called <name>_controller.js or <name>Controller.js. The app (express) variable is passed in if you export a function. An example CRUD controller would be:
````
module.exports = function(app){
  return {
     index: function(req, res){
       // Return all objects
     },
     show: function(req, res){
       // Return an object
     },
     edit: function(req, res){
       // Return the edit page for an object
     },
     new: function(req, res){
       // Return the new form for a new object
     },
     update: function(req, res){
       // Update a object
     },
     create: function(req, res){
       // Create an object
     },
     delete: function(req, res){
       // Delete an object
     }
  }
}
````

# Models

Models are stored at app/models. At the moment, nothing like ActiveRecord is built-in. You can put your models here and it will be required automatically as well as get passed the `app` variable.

# Views

TODO

# Middleware

Middleware functions are stored at app/middleware. If you export a function, you will get passed the app variable as well as have it required automatically. These functions are defined, but not inserted yet into the middleware stack. See config/middleware.js.



