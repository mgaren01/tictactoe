//declare variables
var state = 0  //set global default state to 0
var board = document.getElementById("board") //pulls 'board' div from html into global memory
var clickData = [0, 0, 0, 0, 0, 0, 0, 0, 0] //creates empty array, each of the 9 zeroes represents a value associated with 'x' or 'o'
var clickArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function init() { //things to perform on load
    state = 0  // sets state on load to 0
    const overDiv = document.getElementById('overDiv')
    overDiv.setAttribute('class', 'jumbotron jumbotron-fluid text-center bg-warning');
            var h1 = document.createElement('h1');
            h1.setAttribute('class', 'text-center');
            h1.innerText = 'Tic Tac Toe';
    overDiv.appendChild(h1);
    createBoard(); //calls createBoard function, below
}

function createBoard() {
    var board = document.getElementById('board');//pulls 'board' div into function's memory
    board.innerHTML = '' //initially sets blank board before fully loading, for purposes of reset
    var row = document.createElement('div'); //creates 'row' div in html
    row.setAttribute('class', 'row'); //sets class of 'row' variable
    for (i = 0; i <= 8; i++) { //repeats lines 17 - 25 nine times, creating columns, buttons, and event listeners; appends all together (see below)
        var col = document.createElement('div'); //creates 'column' div in html
        col.setAttribute('class', 'col-4 text-center mt-3'); //sets class of 'column' variable, makes sure each column only takes up 1/3 of horizontal space
        var btn = document.createElement('button'); //creates button element in html
        btn.setAttribute('class', 'bg-success');
        btn.style.minHeight = '100px'; //sets class of 'button' variable
        btn.style.minWidth = '100px';
        btn.setAttribute('id', i); //sets id of each button to coincide with value of i(see 16)
        btn.textContent = "Play"; //sets default content on each button, making sure it's known the space can be clicked
        btn.addEventListener('click', clicker); //each button listens for a click, on click, calls clicker function
        col.appendChild(btn); //appends buttons to columns
        row.appendChild(col); //appends columns to the row element 
    }
    
    var row2 = document.createElement('div'); //creates second row
    row2.setAttribute('class', 'row mt-5'); //assigns row2 its attribute
        var col2 = document.createElement('div'); //creates second column
        col2.setAttribute('class', 'col-12 text-center');   //set col2 attribute
            var restart = document.createElement('button'); //creates reset button
            restart.setAttribute('class', 'bg-danger'); //sets button attribute
            restart.textContent = 'Reset';  //gives reset button text
            restart.addEventListener('click', startOver); //button listens for click, runs startOver function
        col2.appendChild(restart); //adds reset to column
    row2.appendChild(col2); //adds column to row

    board.appendChild(row); //appends row to board (not looped because there is only one row)
    board.appendChild(row2); //adds row2 to board
}

function clicker(e) {
    var id = e.target.id //
    //console.log(id)
    if (state % 2) { //if state # does not divide evenly by two, then:
        var v = "O"; //sets value on click to be 'O'
        clickData[id] += 1; //sets id of clicked tile equal to value of 1 (populates array on line 4)
    } 
    else { //if state number does divide evenly by 2, then: 
        v = "X"; //sets value on click to be 'X'
        clickData[id] += 4; //sets id of clicked tile equal to value of 4 (populates array on line 4)
    }
    //console.log(clickData)
    //console.log(state)
    var btn = document.getElementById(id); //enters button in function memory
    btn.removeEventListener('click', clicker) //on click, removes click listener so button can't be clicked twice
    btn.textContent = v; //replaces initial text content ('Play') with value of v (state dependent)
    setState(id) //calls setState function; passes values of 'id' 
    checkWin() //calls checkWin function
}

function checkWin() {
    //check to see if state > 5
    if (state >= 4) {
        //read array, looping through it
        for (var i = 0; i < clickArray.length; i++) {
            var combo = clickArray[i]; //variable 'combo' is set equal to one of the sub-arrays that define win combinations
                //console.log(clickData[combo[0]]);
                //console.log(clickData[combo[1]]);
                //console.log(clickData[combo[2]]);
            //check if any values within sub-array = 0
            if (clickData[combo[0]] == 0 || clickData[combo[1]] == 0 || clickData[combo[2]] == 0 || 
                (clickData[combo[3]] == 0 || clickData[combo[4]] == 0 || clickData[combo[5]] == 0) || 
                (clickData[combo[6]] == 0 || clickData[combo[7]] == 0 || clickData[combo[8]] == 0) ||
                (clickData[combo[0]] == 0 || clickData[combo[3]] == 0 || clickData[combo[6]] == 0) ||
                (clickData[combo[1]] == 0 || clickData[combo[4]] == 0 || clickData[combo[7]] == 0) ||
                (clickData[combo[2]] == 0 || clickData[combo[5]] == 0 || clickData[combo[8]] == 0) ||
                (clickData[combo[0]] == 0 || clickData[combo[4]] == 0 || clickData[combo[8]] == 0) ||
                (clickData[combo[2]] == 0 || clickData[combo[4]] == 0 || clickData[combo[6]] == 0)) {
                // if any of the three values have a 0, no winner
                //console.log('hi')
            }
            else {
                // if these three values don't have a 0 and add up to 3, O wins
                //check if the three values of the sub-array add to 3
                if (clickData[0] + clickData[1] + clickData[2] === 3 ||
                    (clickData[3] + clickData[4] + clickData[5] === 3 ||
                    (clickData[6] + clickData[7] + clickData[8] === 3 ||
                    (clickData[0] + clickData[3] + clickData[6] === 3 ||
                    (clickData[1] + clickData[4] + clickData[7] === 3 ||
                    (clickData[2] + clickData[5] + clickData[8] === 3 ||
                    (clickData[0] + clickData[4] + clickData[8] === 3 ||
                    (clickData[2] + clickData[4] + clickData[6] === 3)))))))) {
                    //if sum = 3, send alert declaring winner
                    alert('Player Two Wins')
                }
                // .... add up to 12, X wins
                if (clickData[0] + clickData[1] + clickData[2] === 12 ||
                    (clickData[3] + clickData[4] + clickData[5] === 12 ||
                    (clickData[6] + clickData[7] + clickData[8] === 12 ||
                    (clickData[0] + clickData[3] + clickData[6] === 12 ||
                    (clickData[1] + clickData[4] + clickData[7] === 12 ||
                    (clickData[2] + clickData[5] + clickData[8] === 12 ||
                    (clickData[0] + clickData[4] + clickData[8] === 12 ||
                    (clickData[2] + clickData[4] + clickData[6] === 12)))))))) {
                    //if sum = 12, send alert declaring winner
                    alert('Player One Wins')
                }
            }
        }
    }
}



function setState(index) {
    state++  // increments state
    //clickData[index] = ree 
    //nextState()
}

function startOver() {
    init()
    //state = 0
    //nextState()
}