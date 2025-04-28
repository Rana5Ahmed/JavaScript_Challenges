
/*
  Number Challenge
*/
let a = 100; 
let b = 2_00.5; //200.5
let c = 1e2; //100
let d = 2.4; 

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a,b,c,d))); //2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,Math.floor(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));

// Use Variables b + d To Get This Valus //200.5 //2.4
console.log((Math.floor(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(typeof((Math.floor(b)/Math.ceil(d)).toFixed(2)))

console.log(Math.ceil(Math.floor(b)/Math.ceil(d))); // 67 => Number
console.log(typeof(Math.ceil(Math.floor(b)/Math.ceil(d))))