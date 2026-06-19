class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        let col_bucket = new Map();
        let square_bucket = new Map();
        const board_size = 9
        for(let row=0;row<board.length;row++){
            let row_bucket = new Map();
            for(let col=0;col<board_size;col++){
                let i = col+(row*board_size);
                let value = board[row][col];
                if(value==".") continue;
                if(row_bucket.has(value)) return false;
                row_bucket.set(value,1);
                const colKey = `c${col}v${value}`
                if(col_bucket.has(colKey)) return false;
                col_bucket.set(colKey,1);
                const squareKey = `sr${Math.floor(row/3)}c${Math.floor(col/3)}v${value}`;
                if(square_bucket.has(squareKey)) return false;
                square_bucket.set(squareKey,1);
            }
        }
        console.log(square_bucket)
        return true;
    }
}
