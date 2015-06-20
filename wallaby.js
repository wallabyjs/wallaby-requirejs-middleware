module.exports = function (wallaby) {

    var fs = require('fs');
    var path = require('path');
    var requirejsRelativePath = 'bower_modules/requirejs/require.js';
    var requirejsCode = fs.readFileSync(path.join(wallaby.localProjectDir, requirejsRelativePath));

    return {
        files: [
          { load: true, instrument: true, pattern: 'src/config.js' },
          { load: false, instrument: true, pattern: 'src/apps/StopWatch.js' },
          { load: true, instrument: true, pattern: 'test/test-main-wallaby.js' }
        ],

        tests: [
          { load: false, instrument: true, pattern: 'src/apps/StopWatchTest.js' }
        ],

        postprocessor: function (wallaby) {
            return wallaby.createFile({
                path: requirejsRelativePath,
                content: requirejsCode,
                order: -1,    // to make it the first file loaded in the sandbox
                ts: 1         // fixed timestamp to cache it forever in phantomjs
            })
        },

        middleware: function (app, express) {
            app.use('/bower_modules', express.static(path.join(__dirname, 'bower_modules')));
        },

        debug: true
    };
};
