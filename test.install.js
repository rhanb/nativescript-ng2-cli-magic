"use strict";

var debugging = false;

var fs = require('fs');
var cp = require('child_process');
var path = require('path');

var hasAngularCliProject = fs.existsSync("./ng-cli");

if (!hasAngularCliProject) {
    console.log("Create angular-cli project 'ng-cli'");
    cp.execSync('ng new ng-cli');
    console.log("Installing nativescript-ng2-cli-magic");
    cp.execSync('node ../install.js', {cwd: 'ng-cli'});

} else {
    var hasNativeScriptProject = fs.existsSync('./ng-cli/nativescript');
}
