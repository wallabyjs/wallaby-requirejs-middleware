window.globalRequireConfig = {
  baseUrl: 'src',
  waitSeconds: 15,
  paths: {
    'jquery': '../bower_modules/jquery/dist/jquery',
    'q': '../bower_modules/q/q',
    'jasmineJquery': '../bower_modules/jasmine-jquery/lib/jasmine-jquery',
    'text': '../bower_modules/text/text'
  },

  shim: {
    'jquery': {exports: '$'}
  }
};

requirejs.config(window.globalRequireConfig);
