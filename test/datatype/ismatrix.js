var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/ismatrix ...');
test('ismatrix', function (done) {



assert.deepEqual(ubique.ismatrix([[1,3,4]]),true);
assert.deepEqual(ubique.ismatrix([[1],[3],[4]]),true);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->