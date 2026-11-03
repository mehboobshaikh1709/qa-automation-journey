//simple functions
function logintest() {
    console.log("Login Test Started");
    console.log ("Username: admin");
    console.log ("Password: admin123");
    console.log("Login Test Completed");
}

logintest();

//function with parameters
function checkusername(username) {
    console.log("Checking username:", username);
    if(username === "admin") {
        console.log("Username is valid.");
    } else {
        console.log("Username is invalid.");
    }
}   
checkusername("admin");
checkusername("user");    

//function with return value
function calculateTotalBugs(bugsFound, bugsFixed) {
    let totalBugs = bugsFound - bugsFixed;
    return totalBugs;
}   
let bugsFound = 10;
let bugsFixed = 10;
let totalBugs = calculateTotalBugs(bugsFound, bugsFixed);
console.log("Total Bugs Remaining:", totalBugs);    