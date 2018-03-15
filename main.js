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
        console.log("-----------------------------------------------")
        console.log(clozeCard.clozeCardHolder[0].text);
        console.log("-----------------------------------------------")
        inquirer.prompt([{
            type: "input",
            name: "cards",
            message: "What is the missing word?"
        }]).then(function (command) {
            if (command.name === this.cloze) {
                console.log("That is correct!");
            } else {
                console.log("That is incorrect the correct answer is " + this.clozeCard);
            }
            confirm('View Next of Card?')
                .then(function confirmed() {
                        console.log("-----------------------------------------------")
                        console.log(clozeCard.clozeCardHolder[1].text);
                        console.log("-----------------------------------------------")
                    },

                    function cancelled() {
                        console.log('OOPS ERROR');

                    });

        })

    }


});

// var questions = [
//         {
//         type: input,
//         name: answer,
//         message: "What is the missing word?"
//     },
//     {
//         type: confirm,
//         name: nextQuestion,
//         message: "Move onto the next card?"
//     }
// ];