require('es6-shim');
require('reflect-metadata');

require('zone.js');

const HelloWorld = require('./ng.vue');

const bootstrap = require('@angular/platform-browser-dynamic').bootstrap;
bootstrap(HelloWorld);
