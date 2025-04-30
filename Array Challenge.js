    /*
    Array Challenge
    */

    let zero = 0;

    let counter = 3;

    let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

    // Write Code Here
    let mySubArray = [my[my.indexOf("Osama")]]
    console.log(mySubArray.concat(my.slice(zero,counter).reverse())); // ["Osama", "Elham", "Mazero", "Ahmed"];
        // zero 1 count 3
    console.log(my.slice(++zero, counter).reverse()); // ["Elham", "Mazero"]

    //  zero 0 count 2                         // cont 2 zero 1
    console.log(my[--counter][--zero].concat(my[counter][++zero]).concat(my[zero].slice(counter))); // "Elzero"

    console.log(my[zero].slice(-counter,-zero).concat(my[zero].slice(-zero).toUpperCase())); // "rO"