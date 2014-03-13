var expect = require('chai').expect;
var Promise = require('es6-promise').Promise;

describe('PromiseFailure test3', function() {
  it('should fail', function() {
    return new Promise(function(resolve, reject) {
      throw new Error('foo');
    });
  });
});
