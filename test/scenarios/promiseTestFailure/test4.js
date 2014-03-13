var expect = require('chai').expect;
var Promise = require('es6-promise').Promise;

describe('PromiseFailure test4', function() {
  it('should fail', function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        throw new Error('foo');
      }, 10);
    });
  });
});
