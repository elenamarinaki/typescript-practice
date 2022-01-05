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
