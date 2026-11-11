let bondTestData= { //object define kiya
    bondName: "Government Bond",
    investmentamount: "10000",//object ke andar key value pair define kiya
    expectedReturn : 7.5,
    testStatus : "Not Executed"
};
 console.log("the bondname is : ",bondTestData.bondName);//object ke andar key ko access kiya
 console.log("the investment amount is : ",bondTestData.investmentamount);
 bondTestData.testStatus = "Passed";//
 bondTestData.environment = "QA";

 console.log("the test status is : ", bondTestData);//sare object ko print kiya
