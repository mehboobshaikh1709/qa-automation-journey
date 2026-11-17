//task 1:
// Ek arrow function banao:
// - Function name: calculatePassPercentage
// - Parameters: totalTests, passedTests
// - Formula: (passedTests / totalTests) * 100
// - Result return karo.
// Function ko values 50 aur 40 ke saath call karo.

let calculatepasspercentage=(totaltests,passedtests)=>{
    let passpercentage = (passedtests/totaltests)*100;
    console.log("pass percentage : "+passpercentage);
    return passpercentage; 
}

calculatepasspercentage(50,40);


//task 2
let applicationName = "IndiaBonds";
 const testresult=()=>{
     testStatus = "passed";
    console.log("TestStatus : "+ testStatus+ "global varaiable :"+ applicationName);

 }
 //task 3
 testresult();
console.log("TestStatus : "+ testStatus);

// Day 12 Key Takeaways

// Arrow functions provide a concise way to write functions.

// => is the arrow function operator.

// Parameters allow functions to accept input.

// return sends a result back to the caller.

// Implicit return is possible for a single expression.

// Global variables can be accessed from inside functions.

// Local variables cannot be accessed outside their scope.

// Always declare variables using let or const.

// Strict mode prevents accidental creation of undeclared variables.



// const functionName – Stores the function in a variable.

// () – Holds function parameters.

// => – Arrow function symbol.

// {} – Function body.

// return – Sends a result back from the function.

// 2. Arrow Function with Parameters

// Parameters allow us to pass values into a function.

// const calculateFailedTests = (totalTests, passedTests) => {
//     let failedTests = totalTests - passedTests;
//     return failedTests;
// };

// let result = calculateFailedTests(50, 42);

// console.log("Failed test cases:", result);

// Output:

// Failed test cases: 8

// Here:

// totalTests = 50

// passedTests = 42

// failedTests = 50 - 42

// return sends the result back to the caller.

// 3. Short Arrow Function (Implicit Return)

// If an arrow function contains only one expression, we can write it in a shorter way.

// const calculateFailedTests = (totalTests, passedTests) => totalTests - passedTests;

// console.log(calculateFailedTests(50, 42));

// Output:

// 8