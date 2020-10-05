### Pseudocode

# Init/Render Logic
    create game board of 9 squares, arranged 3 x 3
        - each square is a clickable button
    
    set default first state to '0', where x goes first
        - display message stating player's turn
            - switch to alternate message after each click


# Game Logic
    On button click, populate square with 'x' or 'o', depending on state
        - switch states (player) after button press
            - if state 0 ('x'), increment to 1
            - if 1 ('o'), decrement to 0
        - disable button after being pressed

    Victory condition
        - after five or more clicks, check for victory
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