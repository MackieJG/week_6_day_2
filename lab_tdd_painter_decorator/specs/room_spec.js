const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    let room;
    this.beforeEach(function(){
        room = new Room(100, false)
    });
    it('should have an area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 100);
    });
    it('room should not be painted returning False', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });
    it('room should then become painted', function(){
        room.getPainted();
        const actual = room.painted;
        assert.strictEqual(actual, true);

    });
})