import { card_Deck } from "./cardsjs.js";
let current_Draw_Cards = card_Deck;
let current_Discarded_Cards = [] ;
let players = [["01", []], ["02", []], ["03", []], ["04", []]];
let starting_Player_Index = -1

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function startingHand(startingHand_Ammount = 7){
    for(let x = 0; x < players.length; x++){
        for(let i = 0; i < startingHand_Ammount; i++){
            let card_Index = getRndInteger(0, current_Draw_Cards.length);
            let player_Card = current_Draw_Cards[card_Index];
            current_Draw_Cards.splice(card_Index, 1);
            current_Discarded_Cards.push(player_Card);
            players[x][1].push(player_Card);
        }
    }
}

function startingPlayer(){
    starting_Player_Index = getRndInteger(1, players.length+1)
    return starting_Player_Index
}

function drawCards(draw_Ammount = 1){

}

function playerTurn(){
    
}



startingHand()
console.log()