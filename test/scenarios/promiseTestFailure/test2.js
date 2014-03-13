var expect = require('chai').expect;
var Promise = require('es6-promise').Promise;

describe('PromiseFailure test2', function() {
  it('should fail', function() {
    return new Promise(function(resolve, reject) {
      reject(new Error('foo'));
    });
  });
});
