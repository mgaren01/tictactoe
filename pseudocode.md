### Pseudocode

# Init/Render Logic
    create game board of 9 squares, arranged 3 x 3
        - each square is a clickable button
    
    set default first state to '0', where x goes first
        - display message stating player's turn
            - switch to alternate message after each click


# Game Logic
    On button click, populate square with 'x' or 'o', depending on state
        - increment state (player) after button press
            - if even # state (from 0), it is 'x's' turn
            - if odd # state, it is 'o's' turn
        - disable button after being pressed

    Victory condition
        - after five or more clicks (counted by state #), check for victory
            - [1,2,1] = 4
              [2,2,2] = 6*
              [2,1,2] = 5
              [1,1,1] = 3*
              [2,2,1] = 5
              [1,1,2] = 4
              [2,1,1] = 4
              [1,2,2] = 5
            - assign values to each input, '' = 0, 'x' = 1, 'o' = 2
            - sum of 3 or 6 = victory
            - on victory, display win message
                - disable all remaining buttons
        - after 9 clicks (all squares filled), if no victory, 
            display draw message


## Model
    set default state to 0
        - starting from 0, even numbers = x's turn
        - starting from 1, odd numbers = o's turn
    
    setState()
        - check state
            - if even #, add 'x' to tile; update View
            - if odd #, add 'o' to tile; update View
        - increment state

    checkVictory()
        - victoryCondition
            - define input values
                - '' = 0
                - 'x' = 1
                - 'o' = 2
            - assign each tile a number (0, 1, 2, 
                                         3, 4, 5, 
                                         6, 7, 8)
            - check:
                [(0, 1, 2),
                (3, 4, 5),
                (6, 7, 8),
                (0, 3, 6),
                (1, 4, 7),
                (2, 5, 8),
                (0, 4, 8),
                (2, 4, 6)]
            - ignore value of 0
            - add values of 1 and 2 across given arrays
            - sum of 3 or 6 = victory condition 

        - check state
            - if state >= 5, check for victory
                - on victory, display victory message
            - if state > 8 and no victory
                - display draw message    

## View
    createBoard
        // get the board html element by id "board", save it in memory
        - 9 buttons, 3 x 3
            -create row
                add a row by using var row = document.createElement("div");
                add the class "row" to the new "row" row.setAttribute("class", "row");
            for loop from 0 to 8
                -create column
                    var col = document.createElement("div");
                    col.setAttribute("class", "col-4"); // only need a col-4
                -create button
                    var btn = createElement
                    add class "btn"
                    -append btn to col, append col to row to row/column
                -add event listener
                    btn.addEventListener("click", someFunction);
                    -on click
                    // move this logic to someFunction 
                        -check state
                        -if even # state, add an x
                        -if odd # state, add an o
                        -disable event listener
                    // end of someFunction
                append row to board

    displayVictory
        -message

    displayDraw
        -message


## Controller
    clickHandler(s)
        - update Model
        - remove click handler
        - check victory