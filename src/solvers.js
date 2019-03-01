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
  // var solutionCount = 0; // # of possible solutions
  // var newBoard = new Board({n:n});
  // var rooks = 0;
  // for (var start = 0; start < n; start++) {
  //   for(var column = 0; column < n; column++){
  //     for(var row = start; row < n; row++) {
  //       var checkRook = function(board){
  //         board.togglePiece(row, column)
  //         rooks++;
  //         if (board.hasAnyRooksConflicts()) {
  //           board.togglePiece(row, column);
  //           rooks--;
  //         }
  //         if (rooks === n){
  //           console.log(`*${n}*`, board)
  //           solutionCount ++;
  //         }
  //       }
  //     checkRook(newBoard);
  //     }
  //   }
  // }
  // console.log(solutionCount)
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
  var successfulBoardCount = 0;
  var newBoard = new Board({n:n});
  var rookCount = 0;
  var rookPositionList = [];
  var iterateRookBoards = function(rowNum, lastColNum){
    for (let column = 0; column < n; column++) {
      if (rowNum === n) {
        successfulBoardCount++;
        //newBoard.togglePiece(rowNum-1,);
        rookCount--
        return;
      }
      newBoard.togglePiece(rowNum, column);
      rookCount++; 
      if (!newBoard.hasAnyRooksConflicts()) {
        // rookPositionList.push([rowNum, column]);
        iterateRookBoards(rowNum+1,column);
      }
      newBoard.togglePiece(rowNum, column);
      rookCount--;

      
      // if (rookCount === n){
        
      //   successfulBoardCount++;
      //   newBoard.togglePiece(rowNum, column);
      //   return;
      // }
      
      // if (!newBoard.hasAnyRooksConflicts()) {
      //   iterateRookBoards(rowNum+1);
      // }
    }
  }
  iterateRookBoards(0);
  return successfulBoardCount;
};

/* 

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
