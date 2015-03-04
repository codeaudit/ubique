var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/cumdev ...');
test('cumdev', function (done) {

var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];

assert.deepEqual(ubique.cumdev(c),[0.33333333333333304,1.666666666666666,-8.881784197001252e-16]);
assert.deepEqual(ubique.cumdev(b,0),[[-1.3333333333333333,1.3333333333333333,0],[-2,-3,0]]);
assert.deepEqual(ubique.cumdev(b),[[-2.5,-1,-5],[0,0,0]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->