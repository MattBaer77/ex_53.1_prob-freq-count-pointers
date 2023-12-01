// add whatever parameters you deem necessary

/*

sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Examples:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
Constraints

Time Complexity - O(N + M)

*/

const freqCounter = require('./freq-counter')


function sameFrequency(int1, int2) {

    // if(int1 === int2){
    //     return true;
    // }
    // Possible Optimization for certain cases.

    // get frequency of digits in int1
    // get freqency of digits in int2

    // for each digit of int1 compare to same of int 2
    // if ever different return false

    freqInt1 = freqCounter(int1.toString())
    freqInt2 = freqCounter(int2.toString())

    for (let key of freqInt1.keys()){

        if((freqInt1.get(key)) !== (freqInt2.get(key))) return false

    }

    return true

};

module.exports = sameFrequency;