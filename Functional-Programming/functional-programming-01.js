//Higher lever order
//Functions are values
var double = function(x) {
  return x * 2
}

var twoTimes = double

console.log(twoTimes(10)) //20

//Composition
var  animals = [
  { name: 'Jack',     species: 'rabbit' },
  { name: 'Malisa',   species: 'dog' },
  { name: 'Harry',    species: 'dog' },
  { name: 'Kinstone', species: 'fish' },
  { name: 'Terria',   species: 'cat' },
  { name: 'Jimmy',    species: 'fish'}
]

var isDog = function(animal) {
  return animal.species === 'dog'
}

var isNotDog = function(animal) {
  return animal.species !== 'dog'
}

var dogs = animals.filter(isDog)
var otherAnimals = animals.filter(isNotDog)

console.log(dogs)
/**
  [
    { name: 'Harry',    species: 'dog' },
    { name: 'Malisa',   species: 'dog' },
  ]
**/
console.log(otherAnimals)

/**
  [
    { name: 'Jack',     species: 'rabbit' },
    { name: 'Kinstone', species: 'fish' },
    { name: 'Terria',   species: 'cat' },
    { name: 'Jimmy',    species: 'fish'}
  ]
**/
