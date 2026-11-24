// ======================
// try, catch aur finally
// ======================

// Payment ki current status store ki gayi hai.
// Is example mein status "Failed" hai, isliye try block mein error throw hoga.
let paymentStatus = "Failed";

// try block mein risky code ya woh check likhte hain jo fail ho sakta hai.
try {
    // toLowerCase() se status ko lowercase mein convert kiya jaata hai.
    // "FAILED" aur "failed" dono ko same way mein compare kiya ja sakta hai.
    if (paymentStatus.toLowerCase() !== "success") {
        // throw se manually ek Error create aur throw kiya jaata hai.
        // Catch block is error ko receive karega.
        throw new Error("Payment Status Failed hogaya bhai");
    } else {
        // Yeh message tab chalega jab payment status "Success" ya "success" hoga.
        console.log("Payment Status is completed");
    }
}
// catch block try block mein aaye error ko handle karta hai.
catch (error) {
    // error.message se sirf readable error message print hota hai.
    // Expected answer: Payment Status Failed hogaya bhai
    console.log(error.message);
}
// finally block try/catch ke baad hamesha execute hota hai, chahe error aaye ya na aaye.
finally {
    console.log("payment status check is completed");
}

// Final output:
// Payment Status Failed hogaya bhai
// payment status check is completed