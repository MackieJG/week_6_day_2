const Taxi = function(manufacturer, model, driver){
    this.manufacturer = manufacturer;
    this.model = model;
    this.driver = driver;
    this.passengers = []
}

Taxi.prototype.numOfPassengers = function(){
    return this.passengers.length;
}

Taxi.prototype.addPassenger = function(passenger){
    this.passengers.push(passenger);
};

Taxi.prototype.removePassengerByName = function(name){
    const indexOfPassenger = this.passengers.indexOf(name);
    this.passengers.splice(indexOfPassenger, 1);
};
Taxi.prototype.removeAllPassengers = function(){
    this.passengers.splice(0, this.numOfPassengers())
};

module.exports = Taxi;

