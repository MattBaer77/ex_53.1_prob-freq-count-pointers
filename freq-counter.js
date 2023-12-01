
function freqCounter(str){

    let frequencies = new Map();

    for (let val of str) {

        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);

    }

    return frequencies

}

module.exports = freqCounter