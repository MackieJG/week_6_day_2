const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){
    let paint;
    this.beforeEach(function(){
        paint = new Paint(20)
    });
    it('should have 20 litres', function(){
        const actual = paint.volume;
        assert.strictEqual(actual, 20);
    });
    it ('check if empty', function(){
        paint.emptyCan();
        const actual = paint.volume;
        assert.strictEqual(actual,0);
    });

})