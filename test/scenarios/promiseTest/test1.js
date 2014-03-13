var expect = require('chai').expect;
var Promise = require('es6-promise').Promise;

describe('Promise test1', function() {
  var hasRun;
  before(function() {
    hasRun = false;
  });
  it('should be ok', function() {
    return new Promise(function(resolve) {
      setTimeout(resolve, 10);
    }).then(function() {
      hasRun = true;
    });
  });
  it('should have run', function() {
    expect(hasRun).to.equal(true);
  });
});
