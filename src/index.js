import { card_Deck } from "./cardsjs.js";
let current_Draw_Cards = card_Deck;
let current_Discarded_Cards = [] ;
let players = [["01", []], ["02", []], ["03", []], ["04", []]];

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
            console.log(card_Index, player_Card)
            players[x][1].push(player_Card);
        }
    }
}

function drawCards(draw_Pile, draw_Ammount = 1){

}


startingHand()
console.log(players[1][1])
console.log(current_Discarded_Cards.length)