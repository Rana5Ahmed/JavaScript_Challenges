    /*
    Function Arrow Challenges
    */

    // [1] One Statement In Function
    // [2] Convert To Arrow Function
    // [3] Print The Output [Arguments May Change]

    let names = function (...arrOfnames) {
        return (`String [${arrOfnames.join("], [")}] => Done !`);
    };
    console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
    // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
    
// Arrow Function 
let arrowNames = (...arrOfnames) => (`String [${arrOfnames.join("], [")}] => Done !`)
console.log(arrowNames("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
    
    /* ================================= */
    
    // [1] Replace ??? In Return Statement To Get The Output
    // [2] Create The Same Function With Regular Syntax
    // [3] Use Array Inside The Arguments To Get The Output
    
    let myNumbers = [20, 50, 10, 60];
    
    let calc = (one, two, ...nums) => one + two === 80? one + two: one + two + +nums ===80 ? one + two + +nums : null ;
    
    console.log(calc(10, 10, 60)); // 80

    // Regular function
    function calcul(one, two, ...nums){
        if (one + two === 80){
            return one + two
        }
        else if (one + two + +nums === 80){
            return one + two + +nums
        }
        else{
            return null;
        }
    }
    console.log (calcul(10,10,60))