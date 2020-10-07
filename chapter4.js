// SUM OF A RANGE

const range = (start, end, step = 1) => {
    let rangeArray = []
    if (start < end) {
        for (let i = start ; i <= end ; i += step) {
            rangeArray.push(i)
        }
    } else if (start > end) {
        for (let i = start ; i >= end ; i -= Math.abs(step)) {
            rangeArray.push(i)
        }
    }
    
    return rangeArray
}

const sum = (arrayToSum) => {
    let sumAnswer = 0
    for (let number of arrayToSum) {
        sumAnswer += number
    }
    return sumAnswer
}

// let answer = sum(range(1,10))
// let answer2 = range(10,1,-2).join(' ')


// REVERSING AN ARRAY

const reverseArray = (arrayGiven) => {
    let result = []
    for (let i = 0 ; i < arrayGiven.length ; i++) {
        result.unshift(arrayGiven[i])
    }
    return result
}

let answer = reverseArray([1,2,3,4,5]).join(' ')


let mutableArray = [1, 2, 3, 4, 5]

const reverseArrayInPlace = (arrayGiven) => {
    let numberHold = 0
    for ( let i = 0 ; i <= arrayGiven.length / 2 ; i++) {
        numberHold = arrayGiven[i]
        arrayGiven[i] = arrayGiven[(arrayGiven.length - 1) -i]
        arrayGiven[(arrayGiven.length - 1) -i] = numberHold

    }

}

reverseArrayInPlace(mutableArray)

let answer2 = mutableArray.join(' ')

// A LIST

// DEEP COMPARISON


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('answer').innerText = answer
    document.getElementById('answer2').innerText = answer2

})
