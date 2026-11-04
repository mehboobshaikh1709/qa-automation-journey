// Write a for loop that:
// 1. Prints "Test Passed" when the result is Passed.
// 2. Prints "Test Failed" when the result is Failed.
// 3. Counts how many tests passed.
// 4. Counts how many tests failed.
// 5. Prints the final pass and fail counts.

let testResults = [
    "Passed",
    "Failed",
    "Passed",
    "Failed",
    "Passed"
];

let passcount = 0;
let failcount = 0;

for(let i = 0;i<testResults.length;i++){
  if (testResults[i] === "Passed") {
    console.log("Test Passed");
    passcount++;
} else if (testResults[i] === "Failed") {
    console.log("Test Failed");
    failcount++;
}
}
console.log("pass count is : "+passcount );
console.log("fail count is : "+failcount );