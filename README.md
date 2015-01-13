# promised-del
Wrapper for del that adds support for promises.

## Install

 npm install --save promised-del


## Usage

Used just like `del` but returns a promise.

https://github.com/sindresorhus/del

Example: 

	var del = require('promised-del');

	del(['tmp/*.js', '!tmp/unicorn.js'])
		.catch(function (err) {
			// deal with the error.
		})
		.then(function (paths) {
			console.log('Deleted files/folders:\n', paths.join('\n'));			
		});