// CHAPTER 2

let row = ''
let board = ''
let size = 20

for (let i = 1 ; i <= size ; i++) {
    row += '# '
}

for (let i = 1 ; i <= size ; i++) {
    if (i % 2 != 0) {board += ' ' + row + '\n'}
    else {board += row + '\n'}
}

console.log(board)