// add whatever parameters you deem necessary

/*

averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)

Examples:

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

*/

function averagePair(sortedArray, targetAverage) {

    // Can use multiple pointers from right and left
    // if too high - move right pointer left
    // if too low - move left pointer right

    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {

        const avg = ((sortedArray[left] + sortedArray[right]) / 2)

        if (avg === targetAverage) return true

        if(avg < targetAverage){

            left ++;

        }

        if(avg > targetAverage){

            right --;

        }

    }

    return false

}

module.exports = averagePair