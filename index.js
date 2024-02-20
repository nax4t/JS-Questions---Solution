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
