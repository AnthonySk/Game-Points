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
        }
    
        rollDice() {
            let parseCurrentScore = parseInt($(this.idCurrentScore).text())
            const roll = random(1,6);
            if (roll >= 2) { 
                let result = roll;
                $(this.idCurrentScore).text(parseCurrentScore += result);
            } else { 
                alert('tu as fait 1');
                this.id = false;
                $(this.idCurrentScore).text('0');
            }
        }
    }


    ///////////////////// FUNCTIONS /////////////////////


    function random(min, max) {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return (Math.floor(Math.random(Math.random()) * max) + min);
    };  

    function newGame() {
        $('#player div').text('0');
        parseCurrentScore = 0;
        parseTotalScore = 0;
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

    function addName1() {
        $('#player1 > p').text($('#name1').val());
        $('#name1').toggle('display', false);
        $('#add1').toggle('display', false);
    }; 

    function addName2() {
        $('#player2 > p').text($('#name2').val());
        $('#name2').toggle('display', false);
        $('#add2').toggle('display', false);
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

// Add name 1
    $('#add1').on('click', () => {
        addName1();
    });

// Add name 2
    $('#add2').on('click', () => {
        addName2();
    });


}); 