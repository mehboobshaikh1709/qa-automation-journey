let testResults = [
    "Passed",
    "Failed",
    "Passed",
    "Passed",
    "Failed",
    "Passed",
    "gdfg"
];
 let passedCount = 0;
let failedCount = 0;
for(let result of testResults) {
    if(result ==="Passed"){
        passedCount++;
    }else if(result ==="Failed"){
       failedCount++;
        }else{
            console.log("Invalid test result:", result);
        }
    }
    console.log("Total Passed Test Cases:", passedCount);
    console.log("Total Failed Test Cases:", failedCount);