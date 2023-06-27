// Conditional statement

//if(condition){
    // execute some code here
//} else {
    // execute some code here
//}

// If hour between 6 and 12, we want to print "good morning"
// If hour between 12 and 18, we want to print "good afternoon"
// otherwise, we whant to print "good night"

var hour = 12
if(hour >= 6 && hour < 12){
    console.log("Good Morning")
} else if(hour >= 12 && hour < 18){
    console.log("Good Afternoon")
} else{
    console.log("Good Night")
}