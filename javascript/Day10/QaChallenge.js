let bondTestCases = [
    { bondName: "Government Bond", status: "Passed", amount: 10000 },
    { bondName: "Corporate Bond", status: "Failed", amount: 20000 },
    { bondName: "Municipal Bond", status: "Passed", amount: 15000 },
    { bondName: "Tax Free Bond", status: "Failed", amount: 25000 }
];

let BondNames = bondTestCases.map(function(bond){
    return bond.bondName;
});

console.log("Bond Names: ", BondNames);

BondNames.forEach(function(bond){
    console.log(bond);
});

let failedbonds = bondTestCases.filter(function(bond){
    return bond.status ==="Failed";
});
failedbonds.forEach(function(bond){
console.log( "the failed bonds are",bond);
})



let firstbond= bondTestCases.find(function(bond){
    return bond.amount>15000;
});
console.log("First bond with amount greater than 15000 is: ", firstbond);