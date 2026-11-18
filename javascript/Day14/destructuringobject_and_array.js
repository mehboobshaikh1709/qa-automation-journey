// ==========================================================
// Question 1: Destructure the properties of a test-case object
// ==========================================================

// Create an object that stores the details of one test case.
let testCase = {
    testName: "Login Test",
    status: "Passed",
    executionTime: 5
};

// Object destructuring extracts properties from testCase into separate variables.
// Answer: testName = "Login Test", status = "Passed", executionTime = 5.
let { testName, status, executionTime } = testCase;

console.log(testName);       // Answer: "Login Test"
console.log(status);         // Answer: "Passed"
console.log(executionTime);  // Answer: 5

// ==========================================================
// Question 2: Destructure values from a test-results array
// ==========================================================

// Store three test results in an array.
let testResults = ["Login Passed", "IPO Failed", "Bond Search Passed"];

// Array destructuring assigns each array item to a variable by its position.
// Answer: loginstatus = "Login Passed", ipostatus = "IPO Failed",
// bondstatus = "Bond Search Passed".
let [loginstatus, ipostatus, bondstatus] = testResults;

console.log(loginstatus);  // Answer: "Login Passed"
console.log(ipostatus);    // Answer: "IPO Failed"
console.log(bondstatus);   // Answer: "Bond Search Passed"

// ==========================================================
// Question 3: Merge manual and automation test cases
// ==========================================================

let manualTestCases = ["Login", "Registration"];
let automationTestCases = ["IPO", "Bond Search"];

// The spread operator (...) copies array values into totaltestcases.
// Automation tests are added first, followed by manual tests.
// Answer: ["IPO", "Bond Search", "Login", "Registration"]
let totaltestcases = [...automationTestCases, ...manualTestCases];

console.log(totaltestcases);

// forEach executes the provided function once for every test in the array.
totaltestcases.forEach(function(test) {
    console.log(test);
});
// Answer for console.log(test): IPO, Bond Search, Login, Registration

// ==========================================================
// Question 4: Create an updated copy of a bond test
// ==========================================================

let bondTest = {
    bondName: "Government Bond",
    status: "Passed",
    amount: 10000
};

// Spread bondTest into a new object, then override status and add executionTime.
// This does not change the original bondTest object.
let updatedBondtest = {
    ...bondTest,
    status: "Failed",
    executionTime: 3
};

console.log(bondTest);
// Answer: { bondName: "Government Bond", status: "Passed", amount: 10000 }

console.log(updatedBondtest);
// Answer: { bondName: "Government Bond", status: "Failed", amount: 10000, executionTime: 3 }

// ==========================================================
// Question 5: Destructure and update login-test information
// ==========================================================

let loginTest = {
    testname: "Login Test",
    statuses: "Passed",
    executionTime: 5,
    browser: "Chrome"
};

// Extract testname and statuses using object destructuring.
// Answer: testname = "Login Test", statuses = "Passed".
let { testname, statuses } = loginTest;

console.log(testname);  // Answer: "Login Test"
console.log(statuses);  // Answer: "Passed"

// Create a new login-test object without changing loginTest.
// status and executionTime are updated, and environment is added.
let updatedLoginTest = {
    ...loginTest,
    statuses: "Failed",
    executionTime: 8,
    environment: "QA"
};

console.log(updatedLoginTest);
// Answer:
// {
//     testname: "Login Test",
//     statuses: "Failed",
//     executionTime: 8,
//     browser: "Chrome",
//     environment: "QA"
// }