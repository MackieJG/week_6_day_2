const assert = require('assert');
const { isUint16Array } = require('util/types');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

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
    it('does decorator have enough paint to paint a room', function(){
        paint1 = new Paint(60);
        paint2 = new Paint(60);
        room = new Room(100, false)
        decorator.addPaintCan(paint1);
        decorator.addPaintCan(paint2);
        const actual = decorator.enoughPaint(decorator.totalVolume(paint1, paint2), room.area);
        assert.strictEqual(actual, true);
    });
    it('paint the room if the decorator has enough paint', function(){
        paint1 = new Paint(60);
        paint2 = new Paint(60);
        room = new Room(100, false)
        decorator.addPaintCan(paint1);
        decorator.addPaintCan(paint2);
        decorator.enoughPaint(decorator.totalVolume(paint1, paint2, room.area))
        const actual = decorator.paintRoom(decorator.enoughPaint(decorator.totalVolume(paint1, paint2, room.area)), room.painted)
        assert.strictEqual(actual, true);
    })
});
