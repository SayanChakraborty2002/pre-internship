// Take input until user prompts stop.

// let userInput = [];
// let inp;
// do {
//   inp = prompt("Enter anything to add or 'stop' to stop");
//   if (inp !== "stop") userInput.push(inp);
// } while (inp !== "stop");

// write a for loop that multiply each ele inn a arr by two and store in another arr

let arr = [1, 2, 3, 4];

let ans = [];

for (let i = 0; i < arr.length; i++) {
  ans.push(arr[i] * 2);
}

// for in loop

let obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 5,
  e: 71,
};

let obj2 = {};

for (const key in obj1) {
  if (obj1[key] === 2) break;

  obj2[key] = obj1[key];
}

// console.log(obj2);

//for each

let arr1 = ["hello", "bye", "hope", "polo", "solo"];
let ans1 = [];

arr1.forEach(function (ele) {
  // this function is running for every new element
  if (ele === "hope") return;
  ans1.push(ele);
});
// console.log(ans1);

let arr2 = [1, 2, 3, 4, 7, 8, 9];
let ans2 = [];

arr2.forEach((ele) => {
  if (ele === 7) return;
  ans2.push(ele * 2);
});
// console.log(ans2, arr2.length, ans2.length);

function sayHello() {
  return "hello";
}

function greet(helloFunc, name) {
  console.log(helloFunc() + " " + name);
}

greet(sayHello, "Sayan");
