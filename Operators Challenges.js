/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
    [++a] [+] [+b++] [+] [+c++] [-] [+a++]
    [++a]
    - Value: 11
    - Explain: This is a pre increment that increase the value by 1 then print it 
    [+]
    - Explain: Normal addition 
    [+b++]
    - Value: 20 then b became 21
    - Explain: This is a +unary applied to number 
    [+]
    - Explain: Normal addition 
    [+c++]
    - Value: 80 then c became 81 
    - Explain:This is a +unary applied to number  and the increment is postfix
    [-]
    - Explain: Normal subtraction
    [+a++]
    - value: 11
    - Explain: first + in unary plus then post increment happend  then a became 12
    Expected value : 100  
*/

// a = 12 , b = 21 c= 81

console.log(++a + -b + +c++ - -a++ + +a);
/*
    [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
    [++a]
    - Value: 13
    - Explain: This is a pre increment that increase the value by 1 then print it 
    [+]
    - Explain: Normal addition 
    [-b]
    - Value: -21 
    - Explain: This is a -unary applied to number 
    [+]
    - Explain: Normal addition 
    [+c++]
    - Value: 81 then c became 82
    - Explain:This is +unary applied to number  and the increment is postfix
    [-]
    - Explain: Normal subtraction
    [-a++]
    - value: -13 then a became 14
    - Explain: first - in unary nagation then post increment happend 
    [+]
    - Explain: Normal addition 
    [+a]
    - value: 14
    - Explain: unary plus happend 
    Expected value : 100
*/

//  a = 12 b= -21 c= 82 

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
    /*
    [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
    
    [--c]
    - Value: 81
    [+]
    - Explain: addition
    [+b]
    value: 21
    [+]
    - Explain: addition
    [--a]
    value: 11
    [*] 
    - Explain: multiplcation
    [+b++]
    value: 21 b became 22
    [-] => subtaction
    [+b] => 22
    [*] 
    [a] => 11 
    [+]
    [--a] => 10
    [-]
    [+true] => 1
    ecpected output :100
    */


/*
  Challenge 2
*/
let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice
console.log(-d * +e); // 2000
