// Loops
/* 
for(statement1; statement2; statement3){

} */

// for i loop

for(let i=0; i<5; i++){
    console.log('hello world! ' + i)
}

var cars = ["volvo", "ford", "renault"]
// for of loop
for(let car of cars) {
    console.log(car)
    if(car == "ford"){
        break
    }
}

// ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})