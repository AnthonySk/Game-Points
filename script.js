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
                showSvgDiceResult(roll);
            } else { 
                showSvgDiceResult(roll);
                alert('Perdu, tu as fait 1 !');
                this.id = false;
                $(this.idCurrentScore).text('0');
                $('.activePlayer').toggleClass('d-none');
            }
        }
    }


    ///////////////////// FUNCTIONS /////////////////////

    // show SVG vs result
    function showSvgDiceResult(x) {
        switch (x) {
            case 6 :
                console.log('6')
                $('.dice').attr('src', 'img/6.svg')
                break;
            case 5 :
                console.log('5')
                $('.dice').attr('src', 'img/5.svg')
                break;
            case 4 :
                console.log('4')
                $('.dice').attr('src', 'img/4.svg')
                break;
            case 3 :
                console.log('3')
                $('.dice').attr('src', 'img/3.svg')
                break;
            case 2 :
                console.log('2')
                $('.dice').attr('src', 'img/2.svg')
                break;
            case 1 :
                console.log('1')
                $('.dice').attr('src', 'img/1.svg')
                break;
        }
        
    }

    // result random of dice
    function random(min, max) {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return (Math.floor(Math.random() * max) + min);
    };  

    // new game
    function newGame() {
        $('.score').text('0');
        $('#roll').prop('disabled', false);
        $('#hold').prop('disabled', false);
    }; 

    // win process
    function win() {
        const TotalScore1 = parseInt($(player1.idTotalScore).text());
        const TotalScore2 = parseInt($(player2.idTotalScore).text());
        if (TotalScore1 >= 100) {
            alert('Joueur 1 a gagné')
            $('#roll').prop('disabled', true);
            $('#hold').prop('disabled', true);
        } else if (TotalScore2 >= 100) {
            alert('Joueur 2 a gagné')
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
        }
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