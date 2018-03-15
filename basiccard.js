    function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    this.PrintCard = function() {
        console.log("-----------------------------");
        console.log(this.front);
        console.log("-----------------------------");
    }  
}

// var milkSteak = new BasicCard("What is Charlie Kelly's favorite food?", "Milk Steak");
// var whoPooped = new BasicCard("Who pooped the bed?", "Frank Reynolds... Both times.");
// var lethalWeapon = new BasicCard("What movie did the gang make a sequel to?", "Lethal Weapon 6");

// milkSteak.PrintCard();
// whoPooped.PrintCard();
// lethalWeapon.PrintCard();


module.exports = BasicCard;