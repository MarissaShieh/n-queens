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
  var solution;
  var newBoard = new Board({n:n});
  var rooks = 0;
  for(var column = 0; column < n; column++){
    for(var row = 0; row < n; row++) {
      var checkRook = function(board){
        board.togglePiece(row, column)
        rooks++;
        if (board.hasAnyRooksConflicts()) {
          board.togglePiece(row, column);
          rooks--;
        }
        if (rooks === n){
          solution = board;
        }
      }
      checkRook(newBoard);
    }
  }
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  var newSolution = []
  for (var i = 0; i < rooks; i++) {
    newSolution.push(solution.attributes[i])
  }
  return newSolution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var successfulBoardCount = 0;
  var newBoard = new Board({n:n});
  var iterateRookBoards = function(rowNum){
    for (let column = 0; column < n; column++) {
      if (rowNum === n) {
        successfulBoardCount++;
        return;
      }
      newBoard.togglePiece(rowNum, column);

      if (!newBoard.hasAnyRooksConflicts()) {
        iterateRookBoards(rowNum+1,column);
      }
      newBoard.togglePiece(rowNum, column);
      }
  }
  iterateRookBoards(0);
  return successfulBoardCount;
};

/* 
Pseudocode for countNRooksSolutions
starting at row
if row is bigger than the boardsize,
  increment counter
  and untoggle most recently placed piece

  
loop through row
  toggle next piece
  if no conflicts, recurse on to the next row
  if there is a conflict, go to next column
  untoggle current piece
*/

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var newBoard = new Board({n:n});
  var queens = 0;
  // if(n === 1) {
  //   return [[1]];
  // }
  // if(n === 2 || 3) {
  //   return [[0]];
  // }
  for(var column = 0; column < n; column++){
    for(var row = 0; row < n; row++) {
      var checkRook = function(){
        newBoard.togglePiece(row, column)
        queens++;
        if (newBoard.hasAnyQueensConflicts()) {
          newBoard.togglePiece(row, column);
          queens--;
        }
        if (queens === n){
          solution = newBoard;
        }
      }
      checkRook(newBoard);
    }
  }
  var newSolution = []
  for (var i = 0; i < queens; i++) {
    newSolution.push(solution.attributes[i])
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(newSolution));
  return newSolution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var successfulBoardCount = 0;
  var newBoard = new Board({n:n});
  // if(n === 1) {
  //   return 1;
  // }
  // if(n === 2 || n === 3 || n === 0) {
  //   return 0;
  // }
  var iterateRookBoards = function(rowNum){
    for (let column = 0; column < n; column++) {
      if (rowNum === n) {
        successfulBoardCount++;
        return;
      }
      newBoard.togglePiece(rowNum, column);

      if (!newBoard.hasAnyQueensConflicts()) {
        iterateRookBoards(rowNum+1,column);
      }
      newBoard.togglePiece(rowNum, column);
      }
  }
  iterateRookBoards(0);
  console.log('Number of solutions for ' + n + ' queens:', successfulBoardCount);
  return successfulBoardCount;
};
