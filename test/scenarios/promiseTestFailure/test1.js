var expect = require('chai').expect;
var Promise = require('es6-promise').Promise;

describe('PromiseFailure test1', function() {
  it('should fail', function() {
    return new Promise(function(resolve, reject) {
      expect(true).to.equal(false);
    });
  });
});
