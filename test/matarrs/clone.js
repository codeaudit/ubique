var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/clone ...');
test('clone', function (done) {

var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [[5]];

assert.deepEqual(ubique.clone(b),[[-1,3,-1],[4,5,9]]);
assert.deepEqual(ubique.clone(c),[5,6,3]);
assert.deepEqual(ubique.clone(d),[[5]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->