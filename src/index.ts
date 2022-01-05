let id: number = 5;
let company: string = "media company";
let isPublished: boolean = true;
// assign any type
let x: any = "hello";
let ids: number[] = [1, 2, 3, 4, 5];

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
let person: [number, string, boolean] = [1, "Elena", true];
// Tuple array
let employee: [number, string][];

employee = [
  [1, "Elena"],
  [2, "Marika"],
];

// Unions
let pid: string | number;

pid = 22;
pid = "22";

// Enum
// these have values 0, 1, 2, 3 by default
// can change the initial value (to start from 5 instead of 0)
enum Direction1 {
  Up = 5,
  Down,
  Left,
  Right,
}

console.log("Direction1 - Up is: ", Direction1.Up);
console.log("Direction1 - Down is: ", Direction1.Down);
console.log("Direction1 - Left is: ", Direction1.Left);
console.log("Direction1 - Right is: ", Direction1.Right);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log("Direction2 - Up is: ", Direction2.Up);
console.log("Direction2 - Down is: ", Direction2.Down);
console.log("Direction2 - Left is: ", Direction2.Left);
console.log("Direction2 - Right is: ", Direction2.Right);
