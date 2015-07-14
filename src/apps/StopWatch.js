define(['q'], function (Q) {
  var StopWatch = function () {

  };

  StopWatch.prototype.setBar = function () {
  };

  StopWatch.prototype.somePromise = function () {
    var self = this;
    return Q.Promise(function (resolve, reject) {
      setTimeout(function () {
        self.setBar();
        resolve({});
      }, 100);
    });
  };

  return StopWatch;
});
