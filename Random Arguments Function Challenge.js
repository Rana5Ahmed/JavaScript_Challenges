/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
    typeof a === "string" && typeof b === "number" && typeof c === "boolean" 
        ? console.log(`Hello ${a} Your Age Is ${b}, You Are ${c?"Available":"Not Available"} For Hire`)
        : typeof a === "string" && typeof c === "number" && typeof b === "boolean"
        ? console.log(`Hello ${a} Your Age Is ${c}, You Are ${b?"Available":"Not Available"} For Hire`)
        : typeof a === "number" && typeof c === "string" && typeof b === "boolean" 
        ? console.log(`Hello ${c} Your Age Is ${a}, You Are ${b?"Available":"Not Available"} For Hire`)
        : typeof a === "number" && typeof b === "string" && typeof c === "boolean"
        ? console.log(`Hello ${b} Your Age Is ${a}, You Are ${c?"Available":"Not Available"} For Hire`)
        : typeof b === "string" && typeof c === "number" && typeof a === "boolean" 
        ? console.log(`Hello ${b} Your Age Is ${c}, You Are ${a?"Available":"Not Available"} For Hire`)
        : typeof c === "string" && typeof b === "number" && typeof a === "boolean"
        ?console.log(`Hello ${c} Your Age Is ${b}, You Are ${a?"Available":"Not Available"}  For Hire`)
        : console.log("Invalid input combination")
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"