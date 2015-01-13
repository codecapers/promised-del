var del = require('del');
var Promise = require('promise');

//
// Adds promise support to 'del'.
//
module.exports = function (patterns, options) {
	return new Promise(function (resolve, reject) {
		del(patterns, options || {}, function (err, deletedFiles) {
			if (err) {
				reject(err);
			}
			else {
				resolve(deletedFiles);
			}		
		});
	});
};