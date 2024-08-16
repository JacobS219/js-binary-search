let array = [];
const createArray = (length) => {
    for (let i = 0; i <= length; i++ ) {
        array.push(i);
    }
}

const binarySeach = (numberToSearchFor) => {
    let O = 1;
    let low = 0;
    let high = array.length - 1;
    let currentGuess = Math.round(high / 2);
    while (currentGuess !== numberToSearchFor) {
        if (currentGuess > numberToSearchFor) {
            high = currentGuess;
            currentGuess = Math.round((high - low) / 2) + low;
        }
        else if (currentGuess < numberToSearchFor) {
            low = currentGuess;
            currentGuess = Math.round((high - low) / 2) + low;
        }

        console.log(`${currentGuess} vs ${numberToSearchFor}`);
        O++;
    }
    return O;
}

createArray(128563);
console.log("# of Operations: " + binarySeach(61));