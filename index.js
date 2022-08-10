const superheroes = require('superheroes')
const supervillains = require('supervillains')

var mySuperHeroName = superheroes.random()
var mySuperVillainName = supervillains.random()

console.log('My super hero name is: ' + mySuperHeroName)
console.log('My super villain name is: ' + mySuperVillainName)