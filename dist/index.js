"use strict";
let id = 5;
let company = "media company";
let isPublished = true;
// assign any type
let x = "hello";
let ids = [1, 2, 3, 4, 5];
x = 5;
x = "elena";
// error!
// id = "5";
id = 7;
id = id + 1;
console.log("ID is: ", id);
// error
// ids.push("marika");
ids.push(6);
// Tuple
let person = [1, "Elena", true];
// Tuple array
let employee;
employee = [
    [1, "Elena"],
    [2, "Marika"],
];
// Unions
let pid;
pid = 22;
pid = "22";
