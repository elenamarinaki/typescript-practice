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
// Enum
// these have values 0, 1, 2, 3 by default
// can change the initial value (to start from 5 instead of 0)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
console.log("Direction1 - Up is: ", Direction1.Up);
console.log("Direction1 - Down is: ", Direction1.Down);
console.log("Direction1 - Left is: ", Direction1.Left);
console.log("Direction1 - Right is: ", Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log("Direction2 - Up is: ", Direction2.Up);
console.log("Direction2 - Down is: ", Direction2.Down);
console.log("Direction2 - Left is: ", Direction2.Left);
console.log("Direction2 - Right is: ", Direction2.Right);
const user = {
    id: 1,
    name: "John",
};
// Type assertion
let cid = 1;
// let customerId = <User>cid;
// OR...
let customerId = cid;
customerId = { id: 345, name: "Marika" };
// Functions
function addNum(x, y) {
    return x + y;
}
console.log("addNum is: ", addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
log(4);
log("marikaaaaaaa");
const user3 = {
    id: 5,
    name: "Johnny",
};
const p1 = 1;
