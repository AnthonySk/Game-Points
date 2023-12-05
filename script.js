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
    
});  