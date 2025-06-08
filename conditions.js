/*
Conditions are used to make decisions
conditional statements in Javascript
1. if
2. else if
3. else

1. if (condition) {
     code runs if condition is true
    }
*/

/*let age = 12;

if (age >= 19 ) {
    console.log("You are an Adult")
} else if (age >= 13) {
    console.log ("You are a Teen")
} else {
    console.log('you are a child')
} 



let name = "Destiny";
let hour = 23;

if ( hour < 12 ) {
    console.log( "Good Morning " + name )
}
else if (hour < 18) {
    console.log("Good Afternoon " + name)
}
else {
    console.log("Good Evening " + name)
}
*/


let score = 44;
let grade;


if ( score >= 70) {
    grade ="A";
}
else if ( score >= 60) {
    grade ="B";
}
else if ( score >= 50) {
    grade ="C";
}
else if ( score >= 45) {
    grade ="D";
}

else if ( score >= 40) {
    grade ="We Pray for Upgrade";
}
else{
    grade ="You are a Failure, you can never make it";
}

console.log( "Score:", score);
console.log("Grade:", grade);


function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
