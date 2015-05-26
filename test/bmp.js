
var bmp = require('..');
var path = require('path');
var assert = require('assert');

/*
	Most code is taken directly from semver,
	so a lot of the tests we would need are redundant.
*/

describe('bmp', function() {
	describe('get(filename) version', function() {
		it('should return the correct version', function() {
			var version = require('../package').version;
			var filepath = path.join(path.dirname(__dirname), 'package');
			assert.equal(bmp.get(filepath), version);
		});
	});
});
