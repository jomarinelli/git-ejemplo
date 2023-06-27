// Objects. Se definen entre llaves, y tienen info definida en el formato "clave" y valores. Hay que separar por coma cada valor

var customer = {
    firstName: 'John', 
    lastName: 'Flauta',
    cars: ["Volvo", "Ford", "Renalut"]
}

// dot notation
customer.firstName = 'Pepe'
// bracket notation
customer['lastName'] = 'Laposta'

console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)

console.log(customer ['lastName'])

console.log(`customer name is ${customer.firstName} ${customer.lastName}`)

// Array. List of items. Se define entre corchetes. tienen un index que arranca en 0
var car = ["Volvo", "Ford", "Renalut"]
car[1] = "BMW"
console.log(car[1])
console.log(`The customer ${customer.lastName} wants a ${car[0]}`)
console.log(customer.cars[2])