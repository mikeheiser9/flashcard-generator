var BasicCard = require("./basiccard.js");
var inquirer = require('inquirer');
var confirm = require('inquirer-confirm');
var clozeCardHolder = [];
var BasicCardHolder = [];

//constructor object that has full text and cloze
var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    //function that returns the full text replaced with a blank for cloze card and pushes into array
    this.part = function() {
        if (this.text.includes(this.cloze)) {
            this.text.replace(this.cloze, + "__________");
    //else inform user there was an error displaying the card 
        } else {
            console.log("Error displaying card");
        }

    }
}

//basic cards
var milkSteakBasic = new BasicCard("What is Charlie Kelly's favorite food?", "Milk Steak");
    BasicCardHolder.push(milkSteakBasic);
var whoPoopedBasic = new BasicCard("Who pooped the bed?", "Frank Reynolds... Both times.");
    BasicCardHolder.push(whoPoopedBasic);
var lethalWeaponBasic = new BasicCard("What movie did the gang make a sequel to?", "Lethal Weapon 6");
    BasicCardHolder.push(lethalWeaponBasic);
    // console.log(BasicCardHolder);

// cloze card cards
var milkSteak = new ClozeCard("Milk Steak is Charlie Kelly's favorite food", "milk steak");
    clozeCardHolder.push(milkSteak);
var whoPooped = new ClozeCard("Frank pooped the bed!", "frank");
    clozeCardHolder.push(whoPooped);
var lethalWeapon = new ClozeCard("The gang produced the 6th installation in the Leathal Weapon action movie franchise.", "leathal weapon");
    clozeCardHolder.push(lethalWeapon);
    // console.log(clozeCardHolder);


//export to main
module.exports = { 
    ClozeCard: ClozeCard,
    BasicCard: BasicCard,
    BasicCardHolder: BasicCardHolder,
    clozeCardHolder: clozeCardHolder,
    };
