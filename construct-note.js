// add whatever parameters you deem necessary

/*

constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true

*/

/*

Questions -

Can the letters in the letters string be used more than once?
NO -
expect(constructNote("aa", "abcd")).toBe(false);

-



*/

// freqCounter

function freqCounter(str){

    let frequencies = new Map();

    for (let val of str) {

        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);

    }

    return frequencies

}

function constructNote(message = [], letters = []) {

    // if the message is empty return true

    if (message.length === 0) return true;

    // if the letters are empty - return false
    // if the message has more letters than letters return false
    // the above two can be handled in the same step ^

    if (message.length > letters.length) return false;

    // freQ count message
    // freQ count letters

    const freqMessage = freqCounter(message)
    const freqLetters = freqCounter(letters)

    // For each character in message compare if messages has > freQ of that letter than letters.
        // If ever true - return false

    for(let letter of freqMessage.keys()){

        if (freqMessage.get(letter) > freqLetters.get(letter)) return false
        
    }

    // If make it through the loop -

    // message can be built wit the letters you are given, return true

    return true
}

module.exports = constructNote;