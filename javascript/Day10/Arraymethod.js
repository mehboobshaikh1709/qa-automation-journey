//method one forEach() method is used to iterate over the array elements and perform a function on each element.
//  It takes a callback function as an argument, which is executed for each element in the array.
let bondNames =[
    "Government Bond",
    "Corporate Bond",
    "Municipal Bond",
    "Tax Free Bond"
]

bondNames.forEach(function(result){
    console.log(result);
});

bondNames.forEach(function(result){
    console.log("Test bonds name is: ",result)});


let bondstatuses = [
    "Passed",
    "Failed",
    "Passed",
    "Failed"
];

bondstatuses.forEach(function(item,index){
    console.log("Test",index+1,"- ",item);
});
 //map() method is used to create a new array by applying a function to each element of the original array.
 //  It takes a callback function as an argument, which is executed for each element in the array and returns a new value that is added to the new array.
let bondAmounts = [10000,20000,30000,40000];
let updatebondsAmount = bondAmounts.map(function(amount) { //map() method is used to create a new array by applying a function to each element of the original array. It takes a callback function as an argument, which is executed for each element in the array and returns a new value that is added to the new array.
    return amount /100*10 + amount; // logic to calculate 10% of the amount and add it to the original amount

    
});
console.log("Updated bond amounts are: ",updatebondsAmount);//print the updated bond amounts

 let filterstatus =bondstatuses.filter(function(status){
    return status ==="Failed" || status ==="failed"; //filter() method is used to create a new array with all elements that pass the test implemented by the provided function. It takes a callback function as an argument, which is executed for each element in the array and returns true or false. If true, the element is added to the new array.
 });
 console.log(filterstatus);//print the filtered status which is failed
 