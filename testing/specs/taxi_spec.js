const assert = require('assert');
const Taxi = require('../taxi.js');


describe('Taxi', function(){
    let taxi;
    beforeEach(function(){
        taxi = new Taxi('Toyota', 'Prius', 'Blaster')
    });

    it('should have a manufacturer', function(){
        const actual = taxi.manufacturer;
        assert.strictEqual(actual, 'Toyota');
    });
    it('should have a model', function(){
        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius');

    });
    it('should have a driver', function(){
        const actual = taxi.driver;
        assert.strictEqual(actual, 'Blaster');
    });

    describe('passengers', function(){
        it('should start with no passengers', function(){
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []);
        });
        it('should provide the length of the array', function(){
            const actual = taxi.numOfPassengers();
            assert.deepStrictEqual(actual, 0);
        });
        it('should add a passenger to the array of passengers', function(){
            taxi.addPassenger('Dave')
            const actual = taxi.numOfPassengers();
            assert.deepStrictEqual(actual, 1)
        });
        it('should be able to remove a passenger by name', function(){
            taxi.addPassenger('Dave');
            taxi.addPassenger('Andrew');
            taxi.removePassengerByName('Dave');
            const expected = ['Andrew'];
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, expected);
        });
        it('should be able to remove all passengers', function(){
            taxi.addPassenger('Dave');
            taxi.addPassenger('Andrew');
            taxi.removeAllPassengers();
            const actual = taxi.numOfPassengers();
            assert.strictEqual(actual, 0);
        });
    })
});






// numberOfPassengers
// addPassenger
// removePassengerByName
// removeAllPassengers