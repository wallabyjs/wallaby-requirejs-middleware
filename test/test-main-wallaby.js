wallaby.delayStart();

requirejs.config({
  baseUrl: 'src',
  urlArgs: '',
  paths: {
    'testData': '../test/data',
    'testFiles': '../test/testFiles'
  },
  deps: wallaby.tests,
  callback: wallaby.start
});
