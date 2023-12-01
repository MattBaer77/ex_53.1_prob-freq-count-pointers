// add whatever parameters you deem necessary

/*

countPairs
Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

Examples:

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2
Constraints

Time Complexity - O(N * log(N))

or

Time Complexity - O(N)

*/

// Sort it - and run two pointers from end to end toward middle - conditionally moving left or right in.

// O(n * logn) to sort
// O(n) to run multiple pointers
// Whole thing would be O(n * logn)

// Or


function countPairs(arr, num) {

    // sort array

    arr.sort((a,b) => a-b)

    // start a counter

    let counter = 0;
    
    // multiple pointers

    let left = 0
    let right = (arr.length - 1)


    while(left < right) {

        let sum = arr[left] + arr[right];

        if(sum === num){

            counter++

        }
        
        if (sum > num) {

            right--

        } else {

            left++

        }
        
    }

    return counter

};

module.exports = countPairs


// NOTE - O(n) way -

/*

function countPairs(arr, num) {
    let seen = new Set();
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        const complement = num - arr[i];

        if (seen.has(complement)) {
            counter++;
        }

        seen.add(arr[i]);
    }

    return counter;
}

*/