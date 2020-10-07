//declare variables
var state = 0  //set global default state to 0
var board = document.getElementById("board") //pulls 'board' div from html into global memory
var clickData = [0, 0, 0, 0, 0, 0, 0, 0, 0] //creates empty array, each of the 9 zeroes represents a value associated with 'x' or 'o'


function init() { //things to perform on load
    state = 0  // sets state on load to 0
    createBoard(); //calls createBoard function, below(12)
}

function createBoard() {
    var board = document.getElementById('board');//pulls 'board' div into function's memory
    var row = document.createElement('div'); //creates 'row' div in html
    row.setAttribute('class', 'row'); //sets class of 'row' variable
    for (i = 0; i <= 8; i++) { //repeats lines 17 - 25 nine times, creating columns, buttons, and event listeners; appends all together
        var col = document.createElement('div'); //creates 'column' div in html
        col.setAttribute('class', 'col-4'); //sets class of 'column' variable, makes sure each column only takes up 1/3 of horizontal space
        var btn = document.createElement('button'); //creates button element in html
        btn.setAttribute('class', 'btn'); //sets class of 'button' variable
        btn.setAttribute('id', i); //sets id of each button to coincide with value of i(see 16)
        btn.textContent = "Play"; //sets default content on each button, making sure it's known the space can be clicked
        btn.addEventListener('click', clicker); //each button listens for a click, on click, calls clicker function
        col.appendChild(btn); //appends buttons to columns
        row.appendChild(col); //appends columns to the row element 
    }
    board.appendChild(row); //appends row to board (not looped because there is only one row)
}

function clicker(e) {
    var id = e.target.id //
    //console.log(id)
    var v = "X"; //sets default value on click to be 'X'
    var ree = 1; //sets default number value, associated with X; populates array (line 4)
    if (state % 2) { //checks if state number does not divide evenly by 2; in that case: 
        v = "O"; //sets value on click to be 'O'
        ree = 2; //sets number value, in association with O; populates array
    }

    var btn = document.getElementById(id); //enters button in function memory
    btn.removeEventListener('click', clicker) //on click, removes click listener so button can't be clicked twice
    btn.textContent = v; //replaces initial text content ('Play') with value of v (state dependent)

    setState(id, ree) //calls setState function; passes values of 'id' and 'ree'
}


function setState(index, ree) {
    state++  // increments state
    clickData[index] = ree
    //nextState()
}

function startOver() {
    state = 0
    //nextState()
}


//function nextState() {
    // if (state == i % 2) {
    //     button.addEventListener('click', 'o');
    //     button.removeEventListener('click');
    // }
    // else {
    //     button.addEventListener('click' , 'x');
    //     button.removeEventListener('click');
    // }
//}


//function checkVictory() {
//     - victoryCondition
//     - if state >= 5, check for victory
  //  if (state >= 5) {

    //}
//     - define input values
//         - '' = 0
       // let '' = 0;
//         - 'x' = 1
       // let 'x' = 1;
//         - 'o' = 2
      //  let 'o' = 2;
//     - assign each tile a number (0, 1, 2, 
//                                  3, 4, 5, 
//                                  6, 7, 8)

//     - check:
//         [(0, 1, 2),
//         (3, 4, 5),
//         (6, 7, 8),
//         (0, 3, 6),
//         (1, 4, 7),
//         (2, 5, 8),
//         (0, 4, 8),
//         (2, 4, 6)]
//     - ignore value of 0
//     - add values of 1 and 2 across given arrays
//     - sum of 3 or 6 = victory condition 

// - check state

//         - on victory, display victory message
//     - if state > 8 and no victory
//         - display draw message    
//}

// createBoard
        // - 9 buttons, 3 x 3
        // - each tile is a button

    // displayVictory
    //     -message

    // displayDraw
    //     -message