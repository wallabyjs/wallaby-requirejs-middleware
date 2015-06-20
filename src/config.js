window.globalRequireConfig = {
  baseUrl: 'src',
  waitSeconds: 15,
  urlArgs: 'r1',
  paths: {
    'jquery': '../bower_modules/jquery/dist/jquery'
  },

  shim: {
    'jquery': {exports: '$'}
  }
};

requirejs.config(window.globalRequireConfig);
