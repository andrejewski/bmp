#!/usr/bin/env node

var bmp = require('..');
var path = require('path');

var file = path.join(process.cwd(), 'package.json');
var args = process.argv.slice(2);
var version = bmp.get(file);

function help() {/*

  usage: bmp [command]

  commands:
    (no args):      prints current version
    major, b, M:    increment major version (M.0.0)
    minor, m:       increment minor version (x.m.0)
    patch, p:       increment patch version (x.x.p)
    help:           prints the help menu
    (otherwise):    validates & sets version to arg

  bmp version: $version

*/}

function printHelp() {
	var str = help.toString();
	var msg = str
		.substring(str.indexOf('*') + 2, str.lastIndexOf('*') - 1)
		.replace('$version', require('../package').version);
	console.log(msg);
}

if(args.length === 1) {
	var command = args.pop();
	switch(command) {
		case 'b':
		case 'M':
		case 'major':
			version = bmp.major(version);
			break;
		case 'm':
		case 'minor':
			version = bmp.minor(version);
			break;
		case 'p':
		case 'patch':
			version = bmp.patch(version);
			break;
		case 'h':
		case 'help':
			return printHelp();
		default: 
			version = command;
	}

	bmp.set(file, version);
}

console.log(version);
