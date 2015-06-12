var reporter = require('../lib/sauce_reporter');

require('script!../lib/mocha/mocha.js');
require('script!../lib/chai/chai.js');
require('script!../lib/sinon/sinon-1.7.3.js');

mocha.ui('bdd');
mocha.reporter('html');

var expect = chai.expect;
var assert = chai.assert;

beforeEach(function() {
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  this.sinon.restore();
});

require('../shimalias.test.js');

var runner;

if (window.mochaPhantomJS) {
  mochaPhantomJS.run();
} else {
  runner = mocha.run();
}

reporter.setupMochaReporter(runner, window);
