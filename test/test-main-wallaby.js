wallaby.delayStart();

requirejs.config({
  baseUrl: 'src',
  paths: {
    'testData': '../test/data',
    'testFiles': '../test/testFiles'
  },
  deps: wallaby.tests,
  callback: wallaby.start
});
