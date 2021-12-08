/**
 * Web Atelier 2021 3 - Object-Oriented JavaScript
 *
 * Student: Daniela Gjorgjieva
 *
 */

/* *************************************************************** */
/* ** REPLACE THIS FILE WITH YOUR OWN script.js FROM EXERCISE 2 ** */
/* *************************************************************** */

//--------------------------------------------------------------------------------------
// Task 1
//--------------------------------------------------------------------------------------

 /**
 * @param {number} s - A time as the number of seconds.
 * @return {string} A string which represents the number of minutes followed by the remaining seconds
 *  with the M:SS format. If the input value is negative, the resulting string should be in -M:SS format.
 * SS indicates that if the number of seconds is less than 10, it should be padded with a 0 character.
 */
  function format_seconds(s) {
    
    if ((typeof s != "number") || isNaN(s)) {
        return "?:??"
    }
    
    let H = Math.trunc(Math.abs(s) / 3600);
    let M = Math.trunc(Math.abs(s) % 3600 / 60);
    let SS = Math.trunc(Math.abs(s) % 3600 % 60);

    
    if (SS < 10) {
        SS = "0" + SS;
    }
    
    if (H <= 0) {
        return Math.trunc(s) >= 0 ? "" + M + ":" + SS : "-" + M + ":" + SS;
    }
    else {
        return Math.trunc(s) >= 0 ? "" + H + ":" + M + ":" + SS : "-" + H + ":" + M + ":" + SS;
}
    }
    


//They should be able to write this function on the fly


 /**
 * @param {number[]} a - The array of numbers.
 * @param {number} c - The scalar multiplier.
 * @return {number[]} An array computed by multiplying each element of the input array `a`
 * with the input scalar value `c`.
 */
function scalar_product(a, c) {
    if ((!Array.isArray(a)) || (typeof c != "number")) {
        return undefined;
    }
    let A = a.map(x => x * c);
    return A;
}

/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number} A value computed by summing the products of each pair
 * of elements of its input arrays `a`, `b` in the same position.
 */
/* TODO: One test failing */
function inner_product(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length != b.length)
    {
        return undefined;
    }
    
    var sum = 0;
    for (let i = 0; i < a.length; ++i) {
        sum = a[i]*b[i];
    }
    
    return sum;
}


/**
 * @param {array} a - The array.
 * @param {function} mapfn - The function for the map step.
 * @param {function} [reducefn= function(x,y) { return x+y; }] - The
 * function for the reduce step.
 * @param {string} [seed=""] - The accumulator for the reduce step.
 * @return {*} The reduced value after the map and reduce steps.
 */
 function mapReduce(a, mapfn, reducefn =(a,b)=>{return a+b;}, seed="") {
    if (!Array.isArray(a) || typeof mapfn != "function" || (reducefn !== undefined && typeof reducefn != "function"))
        return;
 
    return a.map(mapfn).reduce(reducefn, seed);
}


/**
* @param {integer} x - The first integer.
* @param {integer} y - The second integer.
* @param {integer} [step=1] - The value to add at each step.
* @return {integer[]} An array containing numbers x, x+step, … last, where:
*    - last equals x + n*step for some n,
*    - last <= y < last + step if step > 0 and
*    - last + step < y <= last if step < 0.
*/
function range(x, y, step=1) {
    
    var arr = [];
    
    if ((typeof x !== "number") || (typeof y !== "number") || (typeof step !== "number") || (step === 0)) {
        return undefined;
    }
    else if (step > 0) {
        if (x > y) {
            return [];
        }
        for(x; x <= y; x += step) {
            arr.push(x);
        }
    }
    else {
        if (x < y) {
            return [];
        }
        for(x; x >= y; x += step) {
            arr.push(x);
        }
    }
    
    return arr;
}




/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number[]} An array with the elements found both in `a` and `b`.
 */
function array_intersect(a, b) {
    if(!Array.isArray(a) || !Array.isArray(b)) {
        return undefined;
    }
    let arr = [];
    arr = a.filter(el => b.includes(el));
    return arr;
}


/**
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers.
 * @return {number[]} An array with the elements found in `a` but not in `b`.
 */
function array_difference(a, b) {
    if(!Array.isArray(a) || !Array.isArray(b)) {
        return undefined;
    }
    let arr = [];
    arr = a.filter(el => !b.includes(el));
    return arr;
}


//--------------------------------------------------------------------------------------
// Task 2
//--------------------------------------------------------------------------------------

/**
 * @param {number[]} a - The array over which to iterate.
 * @return {function} - call this function to retrieve the next element of the array. The function throws an error if called again after it reaches the last element.
 */
 function iterator(a) {

    if (!Array.isArray(a))
        return undefined;     
    
    var i = 0;     
    
    return function next (b) {
        if (typeof b === "undefined") {                      
            if (i >= a.length) {
                throw "Error";
            }
            return a[i++];
        }
        if (typeof b === "number") {
            i += b;                 
            return i;  
        }                        
        if (Array.isArray(b)) {                     
            a = b;                     
            i = 0;                     
            return next;                 
        }  
    }      
} 


