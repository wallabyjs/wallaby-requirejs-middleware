define(['apps/StopWatch', 'jquery', 'jasmineJquery', 'text!testData/a.html'],
  function (StopWatch, $, jasmineJquery, aHtml) {

    describe('just checking', function () {
      it('works', function () {
        expect(StopWatch).toBeDefined();
        expect($).toBeDefined();
      });
    });

    describe('jasmine jquery', function () {
      it('should load html', function () {
        console.log(aHtml);
      });
    });
  });
