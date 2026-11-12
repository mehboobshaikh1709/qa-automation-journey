let bondtestcases=[
    {
        bondname: "Government Bond",
        investmentamount: 10000,
        expectedReturn : 7.5,
        status : "Passed"
    },
    {
        bondname: "Corporate Bond",
        investmentamount: 5000,
        expectedReturn : 6.5,
        status : "Failed"
    },
    {
        bondname: "Municipal Bond",
        investmentamount: 20000,
        expectedReturn : 8.0,
        status : "passed"
    }
]

for(let bond of bondtestcases){
    console.log( bond.bondname +" - "+bond.status);
 }
 let totalpassed=0;
 let totalfailed=0;
for(let bond of bondtestcases){
    if(bond.status==="Passed" || bond.status==="passed"){
        totalpassed++;
    } else if(bond.status==="Failed" || bond.status==="failed"){
        totalfailed++;
    }  else{
        console.log("Invalid test result:", bond.status);
    }
}

console.log("Total Passed Test Cases:", totalpassed);
console.log("Total Failed Test Cases:", totalfailed);

