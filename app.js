const Pet = require('./pet.js');
const Person = require('./person.js');

const scooby = new Pet('Scooby Dog', 'Dog');
scooby.eat('Scooby Snack');

const shaggy =  new Person('Shaggy', 'Human');
shaggy.greet();
