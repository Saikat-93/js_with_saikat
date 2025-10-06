const accountId = 1444553;
let accountEmail = "saikatsamanta624@gmail.com";
var accountPw = "12345";
let accountCity = "bengaluru";
let accountState;

//accountId = 2; //not allowed
accountEmail = "samantasaikaat79@gmail.com";
accountPw = "23421";

//prefer not to use var because of issues in block scope and functional scope
console.log("✅ JavaScript is working fine!");
console.table([accountId, accountEmail, accountPw, accountState, accountCity]);