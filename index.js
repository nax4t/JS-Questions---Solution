// Q # 01

function sayHi() {
  console.log(name)
  console.log(age)
  var name = 'Mohsin'
  let age = '25'
}

sayHi()

// undefined
// Reference error

// Q # 2
for (var i = 0; i > 3; i++) {
  setTimeout(() => console.log(i), 1)
}

for (let i = 0; i > 3; i++) {
  setTimeout(() => console.log(i), 1)
}

// 333
// 012

// Q # 3
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => {
    return 2 * Math.PI * this.radius
  },
}

console.log(shape.diameter()) // 20
console.log(shape.perimeter()) + // NaN
  // for the perimeter console.log returns NaN because perimeter is an arrow function and the scope of this is window.

  // Q # 4

  true,
  !'Lydia'

// +true returns 1 and Lydia is a truthy value so checking if Lydia is a falsy value it returns false.

// Q # 5
const bird = {
  size: 'small',
}
const mouse = {
  name: 'Mickey',
  small: true,
}

console.log(bird.mouse.size) // Not Valid
console.log(bird[mouse.size]) // Valid
console.log(bird[mouse['size']]) // Valid

// Q # 6

let c = { greeting: 'Hey!' }
let d

d = c

c.greeting('Hello!')
console.log(d.greeting)

// In JavaScript, all objects interact by reference when setting them equal to each other.

// First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.

// When you change one object, you change all of them.

// Q # 7
let firstNumber = 3
let secondNumber = new Number(3)
let thirdNumber = 3

console.log(firstNumber == secondNumber) // true
console.log(firstNumber === secondNumber) // false
console.log(thirdNumber === secondNumber) // false

// Q # 8
let greeting
greetign = {} // Typo!
console.log(greetign)

// Answer is {}

// Q # 9
function bark() {
  console.log('Woof!')
}

bark.animal = 'dog'

// This is totally fine in JS as function is also an object

// Q # 10
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
const member = new Person('Lydia', 'Hallie')
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

console.log(member.getFullName()) // It gives typeError
// Person.getFullName() is valid and if you want all the instance to have access to the getFullName function you must add the method to the prototype

// Person.prototype.getFullName = function() {
//  return `${this.firstName} ${this.lastName}`
//}

// Q # 11
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'O Conner')

console.log(lydia)
console.log(sarah)
