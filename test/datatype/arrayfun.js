var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/arrayfun ...');
test('arrayfun', function (done) {

var x = [1.4,2.3,3];

assert.deepEqual(ubique.arrayfun(x,Math.log),[0.3364722366212129,0.8329091229351039,1.0986122886681098]);
assert.deepEqual(ubique.arrayfun([1.4,0,-10],function(a) {return ubique.sign(a)}),[1,0,-1]);
assert.deepEqual(ubique.arrayfun([[5,6],[1,3]],Math.log),[[1.6094379124341003,1.791759469228055],[0,1.0986122886681098]]);
assert.deepEqual(ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value)}),[[1,1,1],[1,1,-1]]);
assert.deepEqual(ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value)},1),[[1,1],[1,1],[1,-1]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->