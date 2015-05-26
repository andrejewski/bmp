
var fs = require('fs');
var semver = require('semver');

function get(filepath) {
	return require(filepath).version;
}

function set(filepath, v) {
	var pkg = require(filepath);
	var version = semver.valid(v);
	if(version) {
		pkg.version = version;
	} else {
		throw new Error(v + " is not a valid semver version.");
	}
	var text = JSON.stringify(pkg, null, 2);
	fs.writeFileSync(filepath, text);
}

function major(version) {
	return semver.inc(version, 'major');
}

function minor(version) {
	return semver.inc(version, 'minor');
}

function patch(version) {
	return semver.inc(version, 'patch');
}

module.exports = {
	get: get,
	set: set,
	major: major,
	minor: minor,
	patch: patch
};
