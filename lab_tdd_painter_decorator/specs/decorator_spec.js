const assert = require('assert');
const { isUint16Array } = require('util/types');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')
describe('Decorator', function(){
    let decorator;
    this.beforeEach(function(){
        decorator = new Decorator([])
    });
    it('should have an empty paint stock', function(){
        const actual = decorator.stock
        assert.deepStrictEqual(actual, [])
    });
    it('should add a paint can to stock', function(){
        paint1 = new Paint(20);
        decorator.addPaintCan(paint1);
        const actual = decorator.stock.length;
        assert.deepStrictEqual(actual, 1)
    });
    it('should have 30 litres of paint', function(){
        paint1 = new Paint(20);
        paint2 = new Paint(10);
        decorator.addPaintCan(paint1);
        decorator.addPaintCan(paint2);
        const actual = decorator.totalVolume()
        assert.deepStrictEqual(actual, 30);
    });
});