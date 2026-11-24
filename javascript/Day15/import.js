// =======================
// import.js - function import
// =======================

// export.js se logintest function ko import kiya ja raha hai.
// ./export.js relative path hai, jo current import.js file ke folder se export.js ko find karta hai.
import { logintest } from "./export.js";

// import kiya hua function call kiya jaata hai.
// Output: Login test passed
logintest();