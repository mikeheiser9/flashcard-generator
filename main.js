var clozeCard = require("./clozeCard.js")
var inquirer = require('inquirer');
var confirm = require('inquirer-confirm');


//game logic
inquirer.prompt([{
    type: "list",
    name: "cards",
    message: "What kind of cards would you like to use?",
    choices: [
        "Flash-Cards",
        "Cloze-Cards",
    ]
}]).then(function (command) {
    if (command.cards === "Flash-Cards") {
        console.log("-----------------------------------------------")
        console.log(clozeCard.BasicCardHolder[0].front);
        console.log("-----------------------------------------------")
        confirm('View Back of Card?')
            .then(function confirmed() {
                console.log("-----------------------------------------------")
                console.log(clozeCard.BasicCardHolder[0].back);
                console.log("-----------------------------------------------")
                confirm('View Next of Card?')
                    .then(function confirmed() {
                            console.log("-----------------------------------------------")
                            console.log(clozeCard.BasicCardHolder[1].front);
                            console.log("-----------------------------------------------")
                            confirm('View Back of Card?')
                                .then(function confirmed() {
                                        console.log("-----------------------------------------------")
                                        console.log(clozeCard.BasicCardHolder[1].back);
                                        console.log("-----------------------------------------------")
                                        confirm('View Next of Card?')
                                            .then(function confirmed() {
                                                    console.log("-----------------------------------------------")
                                                    console.log(clozeCard.BasicCardHolder[2].front);
                                                    console.log("-----------------------------------------------")
                                                    confirm('View Back of Card?')
                                                        .then(function confirmed() {
                                                                console.log("-----------------------------------------------")
                                                                console.log(clozeCard.BasicCardHolder[2].back);
                                                                console.log("-----------------------------------------------")

                                                            },

                                                            function cancelled() {
                                                                console.log('OOPS ERROR');

                                                            });

                                                },

                                                function cancelled() {
                                                    console.log('OOPS ERROR');


                                                });
                                    },

                                    function cancelled() {
                                        console.log('OOPS ERROR');


                                    });

                        },

                        function cancelled() {
                            console.log('OOPS ERROR');

                        });

            }, function cancelled() {
                console.log('OOPS ERROR');

            });

    }
    if (command.cards === "Cloze-Cards") {
        clozeLogic();
    }


});

var counter = 0;
var correctAns = 0;
var incorrectAns = 0; 
var i = 0;


function clozeLogic() {
    console.log("-----------------------------------------------")
    console.log(clozeCard.clozeCardHolder[i].part);
    console.log("-----------------------------------------------")
    inquirer.prompt([{
        type: "input",
        name: "cards",
        message: "What is the missing word?"
    }]).then(function (command) {
        // console.log(command);
        if (command.cards === clozeCard.clozeCardHolder[i].cloze) {
            console.log("That is correct!");
            correctAns ++;
        } else {
            console.log("That is incorrect the correct answer is " + clozeCard.clozeCardHolder[i].cloze);
            incorrectAns ++
        }  
                    
        confirm('View Next of Card?')
            .then(function confirmed() {
                if (counter > clozeCard.clozeCardHolder.length){
                    console.log("---------------------------------------");
                    console.log("Your Score:");
                    console.log("Correct Answers: " + correctAns);
                    console.log("Incorrect Answers: " + incorrectAns);
                    console.log("--------------------------------------");
                };
                    i++;
                    clozeLogic();  
                },
                function cancelled() {
                    console.log("Rerun to restart game");
                });
    })
  
}