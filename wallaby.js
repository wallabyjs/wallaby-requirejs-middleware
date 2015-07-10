module.exports = function (wallaby) {

  var path = require('path');

  return {
    files: [
      {load: true, instrument: true, pattern: 'src/config.js'},
      {load: false, instrument: true, pattern: 'src/apps/StopWatch.js'},
      {load: true, instrument: true, pattern: 'test/test-main-wallaby.js'},
      'test/data/*.html'
    ],

    tests: [
      {load: false, instrument: true, pattern: 'src/apps/StopWatchTest.js'}
    ],

    postprocessor: function (wallaby) {
      return Promise.all([
        wallaby.createFile({
          path: 'bower_modules/requirejs/require.js', content: '', order: -1, ts: 1
        }),
        wallaby.createFile({
          path: 'bower_modules/jquery/dist/jquery.js', content: '', order: -1, ts: 1
        })
      ]);
    },

    middleware: function (app, express) {
      app.use('/bower_modules', express.static(path.join(__dirname, 'bower_modules')));
    },

    debug: true
  };
};
