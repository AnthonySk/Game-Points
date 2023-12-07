$(document).ready(() => {


    ///////////////////// CLASS PLAYER /////////////////////
    
    
    class Player {
        constructor(id, name, idCurrentScore, idTotalScore) {
            this.id = id;
            this.name = name;
            this.idCurrentScore = idCurrentScore; 
            this.idTotalScore = idTotalScore;
        }
    
        hold() {
            let parseTotalScore = parseInt($(this.idTotalScore).text());
            let parseCurrentScore = parseInt($(this.idCurrentScore).text());
            $(this.idTotalScore).text(parseTotalScore += parseCurrentScore);
            $(this.idCurrentScore).text('0');
            $('.activePlayer').toggleClass('d-none');
        }
    
        rollDice() {
            let parseCurrentScore = parseInt($(this.idCurrentScore).text())
            const roll = random(1,6);
            if (roll >= 2) { 
                let result = roll;
                $(this.idCurrentScore).text(parseCurrentScore += result);
            } else { 
                alert('Perdu, tu as fait 1 !');
                this.id = false;
                $(this.idCurrentScore).text('0');
                $('.activePlayer').toggleClass('d-none');
            }
        }
    }


    ///////////////////// FUNCTIONS /////////////////////


    function random(min, max) {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return (Math.floor(Math.random() * max) + min);
    };  

    function newGame() {
        $('.score').text('0');
        // parseCurrentScore = 0;
        // parseTotalScore = 0;
        player1.id = true;
        player2.id = false;
        $('#roll').prop('disabled', false);
        $('#hold').prop('disabled', false);
    }; 

    function win() {
        const TotalScore1 = parseInt($(player1.idTotalScore).text());
        const TotalScore2 = parseInt($(player2.idTotalScore).text());
        if (TotalScore1 >= 100) {
            alert(`${player1.name} a gagné`)
            $('#roll').prop('disabled', true);
            $('#hold').prop('disabled', true);
        } else if (TotalScore2 >= 100) {
            alert(`${player2.name} a gagné`)
            $('#roll').prop('disabled', true);
            $('#hold').prop('disabled', true);
        } 
    };


    ///////////////////// BUTTONS /////////////////////


// New Game
    $('#newGame').on('click', () => {
        newGame();
    });

// Hold Score
    $('#hold').on('click', () => { 
        if (player1.id === true) {
            player1.hold();
            player1.id = false;
            player2.id = true;
        } else if (player2.id === true) {
            player2.hold();
            player1.id = true;
            player2.id = false;
        };
        win()
    });

// Roll Dice
    $('#roll').on('click', () => {
        if (player1.id === true) {
            player1.rollDice();
            if (player1.id === false) {
                player2.id = true;
            }
        } else if (player2.id === true){
            player2.rollDice();
            if (player2.id === false) {
            player1.id = true;
            }
        }
    });


    ///////////////////// INITIALIZATION /////////////////////


// declaration player 1 & 2
    const player1 = new Player(true, 'Player1', '#currentScore1', '#totalScore1');
    const player2 = new Player(false, 'Player2', '#currentScore2', '#totalScore2');


}); 