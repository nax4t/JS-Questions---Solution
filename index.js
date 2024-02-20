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
