let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";



//  Map works with arrys 
  let newSwap = swappingCases.split("").map(function(ele){
    return ele === ele.toUpperCase()? ele.toLowerCase():ele.toUpperCase();
  }).join("")
  console.log(newSwap);
  
  // - Unary
  let newUnary = invertedNumbers.map((ele)=> -ele);
  console.log(newUnary)

  //Ignor
  let stringOnly = ignoreNumbers.split("").map((ele) => isNaN(parseInt(ele))?ele:"").join("") 
  console.log(stringOnly)