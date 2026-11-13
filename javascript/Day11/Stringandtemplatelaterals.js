// Task: Bond application QA validation
// 1. Ek variable bondName banao with value "government bond".
// 2. Ek variable paymentMessage banao with value "   Your payment is successful   ".
// 3. Bond name ko uppercase mein print karo.
// 4. Payment message se extra spaces remove karo.
// 5. Check karo ki payment message mein "successful" present hai ya nahi.
// 6. "successful" ko "completed" se replace karo.
// 7. Template literal use karke final output print karo.
let bondname = 'government bond';
let paymentMessage = "  Your payment is successful     ";

console.log(bondname.toUpperCase());//bondname ko uppercase mein print kiya
console.log(paymentMessage.trim());//payment message se extra spaces remove kiya
console.log("Is payment successful?"+paymentMessage.includes("successful"));//check kiya ki payment message mein "successful" present hai ya nahi
let newmsg = paymentMessage.trim().replace("successful","completed");//"successful" ko "completed" se replace kiya
console.log(newmsg);//final output print kiya
console.log(`Bond: ${bondname} | payment : completed`);//template literal use karke final output print kiya