//Map

var animals = [
  { name: 'Jack',     species: 'rabbit' },
  { name: 'Malisa',   species: 'dog' },
  { name: 'Harry',    species: 'dog' },
  { name: 'Kinstone', species: 'fish' },
  { name: 'Terria',   species: 'cat' },
  { name: 'Jimmy',    species: 'fish'}
]

var introduceAnimal = function(animal) {
  return animal.name + ' is a ' + animal.species
}
var names = animals.map(introduceAnimal) //ES5

var names = animals.map((animal) => { return animal.name + ' is a ' + animal.species}) //ES6

//Clearly Simply
var names = animals.map((x) => x.name + ' is a ' + x.species)

console.log(names)
/**
   [  'Jack is a rabbit',
      'Malisa is a dog',
      'Harry is a dog',
      'Kinstone is a fish',
      'Terria is a cat',
      'Jimmy is a fish' ]

 **/