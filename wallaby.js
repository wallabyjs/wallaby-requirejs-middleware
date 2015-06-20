module.exports = function () {
  return {
    files: [
      {load: true, instrument: false, pattern: 'bower_modules/requirejs/require.js'},
      {load: true, instrument: true, pattern: 'src/config.js'},
      {load: false, instrument: true, pattern: 'src/apps/StopWatch.js'},
      {load: true, instrument: true, pattern: 'test/test-main-wallaby.js'}
    ],

    tests: [
      {load: false, instrument: true, pattern: 'src/apps/StopWatchTest.js'}
    ],

    middleware: function (app, express) {
      app.use('/bower_modules',
        express.static(
          require('path').join(__dirname, 'bower_modules')));
    },
    debug: true
  };
};
