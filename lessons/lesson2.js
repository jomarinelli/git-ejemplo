// Concatenation and Interpolation
var price = 25
var itemName = "Table"
var messageToPrint = "The price of a " + itemName +" is " + price + " dollars" // Concatenation
var messageToPrint2 = `The price of a ${itemName} is ${price} dollars wey` // Interpolation
console.log(messageToPrint)
console.log(messageToPrint2)