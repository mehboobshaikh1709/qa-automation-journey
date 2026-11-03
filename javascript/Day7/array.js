let testcases=[
    "IPO",
    "FD",
    "Mutual Funds",
    "Bonds",
    "Stocks"
];
console.log("THE FIRST TEST CASE IS:", testcases[0]);
// TOTAL NO OF TEST CASE IS 
console.log("TOTAL NO OF TEST CASE IS:", testcases.length);
//ADDDS A NEW TEST CASE
testcases.push("ETF");
console.log("THE LAST TEST CASE IS:", testcases[testcases.length-1]);
// PRINT ALL TEST CASES
console.log("ALL TEST CASES ARE:", testcases);

for(let i= 0;i<testcases.length;i++)
    {
console.log("TEST CASES ARE:", testcases[i]);
}