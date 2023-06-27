// Logical "and" operator

// console.log(true && true) // 

// logical "or" operator

// console.log(true || false) // either expression

var ageIsMoreThanEighteen = false
var isUSCitizen = true
var canSee = true

var elegibilityForDrivingLicense = ageIsMoreThanEighteen && isUSCitizen && canSee
console.log("This customer is elegible for a driving license: " + elegibilityForDrivingLicense)


var beginnerDrivingLicense = ageIsMoreThanEighteen || isUSCitizen || canSee
console.log("This customer is elegible for a driving license: " + beginnerDrivingLicense)


// logical "not" operator
console.log(6 !== 10)