// Webpack imports the jQuery CDN code
const $ = require('jquery')

const Person = require('./modules/Person.js')

const jim = new Person('Jim Carroll', 'blue')
jim.greet()

const jane = new Person('Jane Smith', 'green')
jane.greet()
