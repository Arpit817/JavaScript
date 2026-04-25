const accountID = 124147;
let accountEmail = "arpit@example.com"
var accountPassword = "123"
accountCity = "lucknow"
let accountState;

// accountID = 2 // not allowed

accountEmail = "patel@example.com"
accountPassword = "324"
accountCity = "pune"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

/*
Not to use var because of issue in block scope and fuctional scope

*/