var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isnumber ...');
test('isnumber', function (done) {



assert.deepEqual(ubique.isnumber(5),true);
assert.deepEqual(ubique.isnumber(NaN),true);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->