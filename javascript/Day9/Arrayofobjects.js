let bondtestcases=[
    {
        bondname: "Government Bond",
        investmentamount: 10000,
        expectedReturn : 7.5,
    },
    {
        bondname: "Corporate Bond",
        investmentamount: 5000,
        expectedReturn : 6.5,
    },
    {
        bondname: "Municipal Bond",
        investmentamount: 20000,
        expectedReturn : 8.0,
    }
]
console.log("The bond name is : ", bondtestcases[0].bondname);
console.log("The investment amount for second bond is  : ", bondtestcases[1].investmentamount);
console.log("The expected return for third bond is  : ", bondtestcases[2].expectedReturn);


for(let bond of bondtestcases){
    console.log("The bond name is : ", bond.bondname);
    console.log("The investment amount is : ", bond.investmentamount);
    console.log("The expected return is : ", bond.expectedReturn);
}

console.log("The total investment amount is : ", bondtestcases[0].investmentamount+ bondtestcases[1].investmentamount+bondtestcases[2].investmentamount);
