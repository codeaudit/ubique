var assert = require('assert');
var ubique = require('../../index.js');

suite('datafeed',function () {
console.log('Testing datafeed/yahooSync ...');
test('yahooSync', function (done) {

var options = { 'symbol': 'AAPL', 'from': '2015-01-02', 'to': '2015-01-08', 'period': 'd', 'fmt': 'YYYY-MM-DD' };

assert.deepEqual(ubique.yahooSync.historical(options),{"symbol":"AAPL","from":"2015-01-02","to":"2015-01-08","period":"d","date":["2015-01-02","2015-01-05","2015-01-06","2015-01-07","2015-01-08"],"open":[111.389999,108.290001,106.540001,107.199997,109.230003],"high":[111.440002,108.650002,107.43,108.199997,112.150002],"low":[107.349998,105.410004,104.629997,106.699997,108.699997],"close":[109.330002,106.25,106.260002,107.75,111.889999],"volume":[53204600,64285500,65797100,40105900,59364500],"adjclose":[107.958556,104.91719,104.927067,106.398374,110.486441]});


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->