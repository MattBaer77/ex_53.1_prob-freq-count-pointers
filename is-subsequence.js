// add whatever parameters you deem necessary

/*

isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Constraints:

Time Complexity - O(N + M)

*/

// Two pointers

// left checks through hello

// right checks through hello world

// if find match move right  to right by one and move right to that match - 

// possible optimization - each time through check length remaining of right and see if more than total length of left - if no return false


function isSubsequence(str1, str2) {

    // loop through 

    let left = 0

    let right = 0

    while (right < str2.length) {

        if((str1[left]) === (str2[right])){
            left++
        }

        if(left === (str1.length)) return true

        right++

    }

    return false

};

module.exports = isSubsequence;