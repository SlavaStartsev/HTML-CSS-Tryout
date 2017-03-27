var expect = require('chai').expect;
var assert = require('assert');

describe('basic test', function () {
  it('works', function () {
    expect(true).to.be.true;
  });

  it('empty test should run successfully', function() {
    assert.equal('A', 'A');
  });
});
