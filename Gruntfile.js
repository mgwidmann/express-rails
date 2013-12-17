module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['spec/app_spec.js', 'spec/**/*.js']
      }
    },
    watch: {
      grunt: {
        files: ["Gruntfile.js", "package.json"],
        tasks: ["mochaTest"]
      },
      javascript: {
        files: ["app.js", "app/**/*.js", "config/**/*.js", "spec/**/*.js"],
        tasks: ["mochaTest"]
      }
    },
    nodemon: {
      dev: {
        options: {
          file: 'app.js',
          args: [
            '--debug'
          ],
          ignoredFiles: [
            'README.md',
            'node_modules/**',
            '.DS_Store'
          ],
          watchedExtensions: [
            'js'
          ],
          watchedFolders: [
            'app',
            'config'
          ],
          debug: true,
          delayTime: 1,
          env: {
            PORT: 3000
          },
          cwd: __dirname
        }
      },
      test: {
        options: {
          file: 'app.js',
          args: [
            '--debug'
          ],
          ignoredFiles: [
            'README.md',
            'node_modules/**',
            '.DS_Store'
          ],
          watchedExtensions: [
            'js'
          ],
          watchedFolders: [
            'app',
            'config'
          ],
          debug: true,
          delayTime: 1,
          env: {
            PORT: 3333,
            NODE_ENV: 'test'
          },
          cwd: __dirname
        }
      }
    }
  });

  grunt.option('force', true);

  grunt.registerTask('test', 'Test code with Mocha (w/ autoreload & autorerun)', function() {
    process.env.NODE_ENV = 'test';
    process.env.PORT = 3333;
    if(process.env.LEVEL === undefined){
      process.env.LEVEL = 'warn';
    }
    grunt.task.run(['mochaTest', 'watch']);
  });

  grunt.registerTask('default', ['nodemon:dev']);
};