//task 1
let  testModules : string[]=['Bonds','IPO','FD','Mutual funds'];
//task 2
let testExecutionTimes : number[]=[5,10,15,20,25];

//task3
let testCases :{
testCaseName : string ;
testCaseId : number;
isPassed : boolean;
module : string;


}={
    testCaseName : "Bond Purchase" ,
testCaseId : 101,
isPassed : true,
module : "bond"


};

console.log(testModules,testExecutionTimes,testCases);
