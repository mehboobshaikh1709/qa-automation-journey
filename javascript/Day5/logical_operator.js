//AND LOGICAL OPERATOR
let username = "JohnDoe";
let testscore = 85;

if(username === "JohnDoe" && testscore >= 80) {
    console.log("Access granted to John Doe with a good test score.");
}else
{
    console.log("Access denied.");
}
//or LOGICAL OPERATOR
let userRole = "admin";
if(userRole === "admin" || userRole === "moderator") {
    console.log("User has elevated privileges.");
}else
{
    console.log("User has standard privileges.");
}

let totalTests = 10;
let passedTests = 9;
let criticalBugs = 2;

let QAaprroved = false;
let manager_apprioved = true;

if((passedTests === totalTests && criticalBugs === 0) || (QAaprroved && manager_apprioved)) {
    console.log("The software is approved for release.");
}else
{
    console.log("The software is not approved for release.");
}