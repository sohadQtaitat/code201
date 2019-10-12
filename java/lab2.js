'use strict';
var user = prompt(" Can You Please Tell Us Your Name ")
alert("Welcome You Here " + user + " I wish You Enjoy Knowing Me..")
var counter = 0;


/////////////////////////////////////////The 5 Questions//////////////////////////////////////////
var questions
    = [
        ["Do you think i love Pictuer?! ",
            " Correct ... I take alot Pictuer to my self ",
            " Rong ... i love pictuer",
            "Try again "
        ],
        [
            " Do you think my first car it ..... G class",
            "No .. I don,t have car yet",
            " correct ... i wish that",
            "Try again "
        ],
        [
            "Do you think i\'m athletic ?!",
            " yes ..i do some sport activty",
            " No ... i\'m  ",
            "Try again"
        ],
        [
            " Do you think i love summer?",
            " No ,  i love winter",
            " yes ... i love winter",
            "Try again"
        ],
        [
            "Do you think i love website programming",
            " yes i love , but i love network more",
            " i love it ,, but i love networking more",
            "Try again"
        ]
    ]
    function aboutMe(){ 
for (var i = 0; i < 5; i++) {
    var exactArray = questions[i];
    var promptQuestion = exactArray[0];
    var posetiveReply = exactArray[1];
    var negativeReply = exactArray[2];
    var defultReply = exactArray[3];
    var name = prompt(promptQuestion);
    name = name.toLowerCase();
    switch (name) {
        case "yes":
        case "y":
            alert(posetiveReply);
            counter = counter + 1;
            console.log(name);
            break;
        case "no":
        case "n":
            alert(negativeReply);
            console.log(name);
            break;
        default:
            alert(defultReply);
            console.log(name);
            break;
    }} }
    aboutMe();

    ////////////////////////////////////////////the 6th question////////////////////////////////////////
function myAge(){
for (var age = 0; age < 4; age++) {
    var old = prompt("Guess how old am I... You have 4 trials")
    if (old == 24) {
        alert("Yes exactly!");
        counter = counter + 1;
        console.log(old);
        break;
    } else if (old > 24) {
        alert("too high");
        console.log(old);
    } else if (old < 24) {
        alert(" too low");
        console.log(old);
    }
}
alert("I am 24 years old");
}
myAge();
//////////////////////////////////////////the 7th question//////////////////////////////////////////

function gussGame(){
var game = ['red', 'green', 'black', 'yellow', 'blue', 'pink'];
for (var times = 0; times < 5; times++) {
    var play = prompt("I love 6 different color.. Can you guess one of them?");
    switch (play) {
        case game[0]:  
        case game[1]:
        case game[2]:
        case game[3]:
        case game[4]:
        case game[5]:
            alert(" You are right.. My fav colors are: red, green, pink, yellow, blue, black");
            counter = counter + 1;
            console.log(play);
            times = 5;
            break;
        default:
            alert("You are rong .. Try again ")
            console.log(play);
            break;
    }}
alert("  My fav colors are: red, green, pink, yellow, blue, black ");
}
gussGame();
alert("You got " + counter + " points after completing the quiz");
alert("Thanks for being here " + user);


