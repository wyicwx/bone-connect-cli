var boneConnect = require('bone-connect');
var commander = require('commander');


boneConnect({
	commander: commander
})();

var argv = process.argv.slice(2);
argv.unshift('connect');

argv = process.argv.slice(0, 2).concat(argv);
commander.parse(argv);