let testcases =[
    "Login",
    "Registartion",
    "Bond Search",
    "IPO",
    "payment",
    "Orderbook",
];

for(let i =0;i<testcases.length;i++){
    if(testcases[i].includes("IPO")){
        console.log("IPO Test Case Found:", testcases[i]);
    }  else
    {
        console.log("IPO Test Case Not Found:", testcases[i]);
    }
}