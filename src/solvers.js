/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution; // MATRIX
  //initialize w/ new board w/ all 0s
  //base case, n rooks have been placed on board
  var newBoard = new Board({n:n}).attributes;
  //debugger;
  console.log('**', newBoard)
  var rooks = 0;
  var checkRook = function(board){
    if (rooks === n){
      solution = rooks;
      return;
    }
    for(let column = 0; column < n; column++){
      for(let row = 0; row < n; row++) {
        console.log(board)
        board[row][column] = 1;
        if (board.hasRowConflicts || board.hasAnyColumnConflicts) {
          // board[row][column] = 0;
          return;
        }
        rooks++;
        checkRook(board);
      }
    }
  }
  checkRook(newBoard);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; // # of possible solutions

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
