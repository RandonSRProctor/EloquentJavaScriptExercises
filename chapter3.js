// CHAPTER 3

const minimum = (a , b) => a < b ? a : b

console.log(minimum(-3000,2000))

// RECURSION

const isOddOrEven = (numberGiven) => {
    if (numberGiven < 0) {
        numberGiven *= numberGiven
    }
    if (numberGiven === 0) {
        return 'Even'
    } else if (numberGiven === 1) {
        return 'Odd'
    } else {
        return isOddOrEven(numberGiven - 2)
    }
}

console.log(isOddOrEven(-75))

const letterInstanceCounter = (wordGiven , letterToCount) => {
    let matchCount = 0
    for (let i = 0 ; i < wordGiven.length ; i++) {
        if (wordGiven[i] === letterToCount) {
            matchCount++
        }
    }
    return matchCount
}

console.log(letterInstanceCounter('Mississippi', 's'))

