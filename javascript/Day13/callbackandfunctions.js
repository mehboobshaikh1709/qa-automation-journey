function testcases(testcasename,callback){
 console.log("testcases name is IPO testing" + testcasename );
callback();
}

function showcompletemesg(){
    console.log("test execution completed");
}

testcases("Mehboob",showcompletemesg);


function checkpayment(amount,callback){

    console.log("checking payment status for amount :",amount)
callback("Successfull");
}


function showPaymentStatus(status){
    console.log("Payment Status" ,status);
    return status;

}
checkpayment("1000",showPaymentStatus)


// Challenge 3

let testcases1=["Login","IPO","Bond Search"];

function executetestcase(callback){

    testcases1.forEach(function(test){
        console.log("Executing",test);
        callback(test,"Passed");
    });
 
}

function testcasename(testcasename,teststatus){
    console.log(testcasename," : ",teststatus);
return teststatus;

}

executetestcase(testcasename);




```javascript
/*
====================================================
DAY 13 - CALLBACKS & HIGHER-ORDER FUNCTIONS
====================================================

1. CALLBACK FUNCTION

A callback is a function passed as an argument
to another function.

Example:

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

function showMessage() {
    console.log("Welcome to IndiaBonds QA");
}

greetUser("Tester", showMessage);


2. FUNCTION REFERENCE VS FUNCTION EXECUTION

showMessage     -> Passes the function reference.
showMessage()   -> Executes the function immediately.

When passing a callback, generally pass the
function name without parentheses.


3. CALLBACK WITH PARAMETERS

We can also pass data to a callback function.

Example:

function executeTest(amount, callback) {
    console.log("Checking payment:", amount);
    callback("Successful");
}

function showPaymentStatus(status) {
    console.log("Payment Status:", status);
}

executeTest(1000, showPaymentStatus);

Here:
- callback("Successful") passes a value.
- status receives the value "Successful".


4. HIGHER-ORDER FUNCTIONS

A Higher-Order Function is a function that:

- Accepts another function as an argument, OR
- Returns another function.

Examples:
forEach(), map(), filter(), find()

These array methods accept callback functions.


5. CALLBACK WITH forEach()

Example:

let testCases = ["Login", "IPO", "Bond Search"];

testCases.forEach(function(test) {
    console.log(test);
});

Here:
- forEach() is a higher-order function.
- The function inside forEach() is a callback.
- Each array element is passed to the callback.


6. CALLBACK WITH MULTIPLE PARAMETERS

Example:

function executeTest(callback) {
    callback("Login", "Passed");
}

function showTestResult(testName, status) {
    console.log(testName, ":", status);
}

executeTest(showTestResult);

A callback can receive multiple arguments.


7. EXECUTION ORDER OF CALLBACKS

Example:

function processTest(callback) {
    console.log("Step 1");
    callback();
    console.log("Step 3");
}

function completeTest() {
    console.log("Step 2");
}

processTest(completeTest);

Output:
Step 1
Step 2
Step 3

The callback executes when it is called.


8. ARROW FUNCTION AS CALLBACK

Example:

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

greetUser("Tester", () => {
    console.log("Welcome to QA");
});


9. PLAYWRIGHT CONNECTION

Playwright uses callback functions in test definitions.

Example:

test("Login Test", async ({ page }) => {
    // Test steps
});

The function passed inside test() is a callback.

Understanding callbacks helps us understand
Playwright test structures and asynchronous code.


====================================================
KEY TAKEAWAYS
====================================================

1. A callback is a function passed to another function.
2. Use function references when passing callbacks.
3. Use callback() to execute the received function.
4. Callbacks can receive one or multiple parameters.
5. Higher-order functions accept or return functions.
6. forEach(), map(), filter(), and find() use callbacks.
7. Callbacks are an important foundation for Playwright.

====================================================
END OF DAY 13
====================================================
*/
```

