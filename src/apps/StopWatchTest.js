define(['apps/StopWatch', 'jquery', 'jasmineJquery', 'text!testData/a.html'],
  function (StopWatch, $, jasmineJquery, aHtml) {

    describe('just checking', function () {
      it('works', function () {
        expect(StopWatch).toBeDefined();
        expect($).toBeDefined();
        expect(1).toBe(1);
      });
    });

    describe('jasmine jquery', function () {
      it('should load html', function () {
        console.log(aHtml);
      });
    });

    describe('attempt to reproduce editing issues', function () {

      var foo;

      beforeEach(function () {
        foo = new StopWatch();
        spyOn(foo, 'setBar');
      });

      it('promise + async test should work', function (done) {
        foo.somePromise().done(function () {
          expect(foo.setBar).toHaveBeenCalled();
          done();
        });
      });

      it('missing function call should work', function () {
        //expect(foo.missingFunc()).toBeFalse();
      });

    });

  });
