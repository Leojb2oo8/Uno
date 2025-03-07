let cards = {}
console.log(cards)

for(let x = 0; x < 10; x++){
    cards[x+".1"] = ["B", x];
    cards[x+".2"] = ["R", x];
    cards[x+".3"] = ["Y", x];
    cards[x+".4"] = ["G", x];
}
console.log(cards)

for(let x = 0; x < 3; x++){
    cards["/"+"."+(x+1)+".1"] = ["B", "/"];
    cards["/"+"."+(x+1)+".2"] = ["R", "/"];
    cards["/"+"."+(x+1)+".3"] = ["Y", "/"];
    cards["/"+"."+(x+1)+".4"] = ["G", "/"];
}
console.log(cards)

for(let x = 0; x < 3; x++){
    cards["(/)"+"."+(x+1)+".1"] = ["B", "(/)"];
    cards["(/)"+"."+(x+1)+".2"] = ["R", "(/)"];
    cards["(/)"+"."+(x+1)+".3"] = ["Y", "(/)"];
    cards["(/)"+"."+(x+1)+".4"] = ["G", "(/)"];
}
console.log(cards)