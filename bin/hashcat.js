#!/usr/bin/env node
var path = require('path');
var fs = require('fs');
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
hcat = require(lib + '/libhashcat.js');

if(process.argv.length < 3 || process.argv[2][0] == '-')
{
    console.log('Usage: hashcat index.html');
    process.exit(1);
}

var options = {
    htmlFile: process.argv[2]
}

hcat.hashcatify(options);


