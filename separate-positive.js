// add whatever parameters you deem necessary

/*

separatePositive
Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).

Examples:

separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]
Constraints

Time Complexity: O(N)

*/

/* Questions - can I save any variables?

can I save a right and left array and put them together at the end / re-add them to the original array? (Empty out the original and fill it back up?)
can I pop numbers from the end and then add them back into the array in order?

going to assume I cannot do these and so I will take the approach of swapping indexes

this is a two pointers problem

*/

function separatePositive(arr) {

    // separate positive integers to left and negative integers to right
    // do in place - do not build a copy of the input array

    // two pointers toward the middle - swap assign indexes if conditional shows negative on left and positive on right swap
    // if left is > 0 left++
    // else right -- to keep comparisons moving

    let left = 0;
    let right = arr.length -1;

    while (left < right){

        if(arr[left] < 0 && arr[right] > 0){

            [arr[left], arr[right]] = [arr[right], arr[left]]

        } else if(arr[left] > 0) {

            left ++

        } else {

            right --

        }

    }

    return arr

}

module.exports=separatePositive