'use strict';



var name = prompt('What is your Name ,Please !');
console.log('name' + name);
alert('Welcome ' + name + ' how are you , i want to ask you some question please');

///////////////////////////////////////////////////////////////////////////////////////////////


var fav1 = prompt('Who much 2+2 ? Please write your answer !?');
var AQ1 = 4;


if (fav1 == AQ1) {
    alert('Correct answer ... good job');
}


else {

    for (var i = 1; i <= 4; i++) {


        if (fav1 < AQ1) {

            alert(' sorry your answer is too low  ...please try again :)')
        }

        else if (fav1 > AQ1) {
            alert(' sorry your answer is too high  ...please try again :)')

        }

        else {
            alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 4')
        }
    }
}




////////////////////////////////////////////////////////////



var fav2 = prompt('Who much 5+3 ? Please write your answer !?');
var AQ2 = 8;


if (fav2 == AQ2) {
    alert('Correct answer ... good job');
}


else {

    for (var i = 1; i <= 4; i++) {


        if (fav2 < AQ2) {

            alert(' sorry your answer is too low  ...please try again :)')
        }

        else if (fav2 > AQ2) {
            alert(' sorry your answer is too high  ...please try again :)')

        }

        else {
            alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 8')
        }
    }
}

//////////////////////////////////////////////////////////


var fav3 = prompt('Who much 9-2 ? Please write your answer !?');
var AQ3 = 7;


if (fav3 == AQ3) {
    alert('Correct answer ... good job');
}


else {

    for (var i = 1; i <= 4; i++) {


        if (fav3 < AQ3) {

            alert(' sorry your answer is too low  ...please try again :)')
        }

        else if (fav3 > AQ3) {
            alert(' sorry your answer is too high  ...please try again :)')

        }

        else {
            alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 7')
        }
    }
}

/////////////////////////////////////////////////////////////////////


var fav4 = prompt('Who much 2*4 ? Please write your answer !?');
var AQ4 = 8;


if (fav4 == AQ4) {
    alert('Correct answer ... good job');
}


else {

    for (var i = 1; i <= 4; i++) {


        if (fav4 < AQ4) {

            alert(' sorry your answer is too low  ...please try again :)')
        }

        else if (fav4 > AQ4) {
            alert(' sorry your answer is too high  ...please try again :)')

        }

        else {
            alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 8')
        }
    }
}


/////////////////////////////////////////////////////////////////

var fav5 = prompt('Who much 10/2 ? Please write your answer !?');
var AQ5 = 5;


if (fav5 == AQ5) {
    alert('Correct answer ... good job');
}


else {

    for (var i = 1; i <= 4; i++) {


        if (fav5 < AQ5) {

            alert(' sorry your answer is too low  ...please try again :)')
        }

        else if (fav5 > AQ5) {
            alert(' sorry your answer is too high  ...please try again :)')

        }

        else {
            alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 5')
        }
    }
}

/////////////////////////////////////////////////////////////////

var fav6 = prompt('Who much 2*2+3+3-1 ? Please write your answer !?');
var AQ56 = 9;


if (fav6 == AQ6) {
    alert('Correct answer ... good job');
}


else {

    for (var i = 1; i <= 4; i++) {


        if (fav6 < AQ6) {

            alert(' sorry your answer is too low  ...please try again :)')
        }

        else if (fav6 > AQ6) {
            alert(' sorry your answer is too high  ...please try again :)')

        }

        else {
            alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 5')
        }
    }
}


/////////////////////////////////////////////////////////////////////////






var fav7 = prompt('What are multiples of 2 which less than 16');

var answers = [4, 6, 8, 10, 12, 14];
var point = 0;
var leftAttembet = fav7.length - 1;

for (var i = 0; i < fav7.length; i++) {

    if (fav7 == 4 || fav7 == 6 || fav7 == 8 || fav7 == 10 || fav7 == 12 || fav7 == 14) {


            alert(' Keep going answer ')
            point = point + 1;
          fav7 =  prompt('correct answer ... you have ' + leftAttembet + ' attembet left ')
        
    }
    else {

        alert('sorry ' + name + 'roung gussing .... you still have another attampet  ')
      fav7=  prompt('What are multiples of 2 which less than 16')

    }
}

alert('sorry ' + name + 'you have skipped your attempts to return ..... your point is ' + point)

alart(answers);









/*
    switch (fav7) {

        case 4 :
        case 6 :
        case 8 :
        case 10 :
        case 12 :
        case 14 :

          alert( 'correct answer ... god job ');
          break;

        case 'NO':
        case 'N':
          alert(currentNegativeReply);
          break;

        default:
          alert(' Wrong Answer!');
      }

    }






























      for (var i = 0; i < questions.length; i++) {

        var currentQuestion = questions[i]; // array of 3 items [prompt, positive, negative]

        var promptIndex = 0;

        var positiveIndex = 1;

        var negativeIndex = 2;

        var currentPrompt = currentQuestion[promptIndex];

        var userResponse = prompt(fav7);



        switch (userResponse) {

          case 'YES':
          case 'Y':
            alert(currentPositiveReply);
            break;

          case 'NO':
          case 'N':
            alert(currentNegativeReply);
            break;

          default:
            alert(' Wrong Answer!');
        }

      }









else {

    for (var i = 1; i <= 6; i++) {


        if (fav < AQ5) {

            alert(' sorry your answer is too low  ...please try again :)')
        }

        else if (fav > AQ5) {
            alert(' sorry your answer is too high  ...please try again :)')

        }

        else {
            alert('I\'m sorry '+name + 'your attempts are over  , the corrsct amswer is 5')
        }
    }
}




















































/////////////////////////////////////////////////////////////////////////




/*var q1 = prompt('Are you happy :)')

q1 = q1.toLowerCase();

if (q1 == 'yes') {//YES,yEs,YEs,
    alert('I\'m Very happy to see you happy  ');
}
else if (q1 == 'y') {
    alert('I\'m Very happy to see you happy  ');
}

else if (q1 == 'no') {
    alert(' Ooh , try to make some thing you love to do  ');
}
else if (q1 == 'n') {
    alert(' Ooh , try to make some thing you love to do  ');
}
else {
    alert(name + ' please write yes or no or y or n ');

    alert('Be happy' + name);
}
//***************************************************************** */

/*var q3 = prompt('do you love to eat vegetarian food :)')

q3 = q3.toLowerCase();


if (q3 == 'yes') {//YES,yEs,YEs,
    alert(' Great ......is very help for healthy ....  ');
}
else if (q3 == 'y') {
    alert(' Great ......is very help for healthy ....  ');
}

else if (q3 == 'no') {
    alert(' Try to be vegetarian is help your healthy  ');
}
else if (q3 == 'n') {
    alert(' Try to be vegetarian is help your healthy  ');
}
else {
    alert(name + ' please write yes or no or y or n ');

    alert('food is delicius :)');
}



//************************************************************* */


/*var q4 = prompt('Do you love to hear music:)')

q4 = q4.toLowerCase();


if (q4 == 'yes') {//YES,yEs,YEs,
    alert('Good .... music make mind comfortbal  ');
}
else if (q4 == 'y') {
    alert('Good .... music make mind comfortbal  ');
}

else if (q4 == 'no') {
    alert(' there is beautifual music try to hear it  ');
}
else if (q4 == 'n') {
    alert(' there is beautifual music try to hear it  ');
}
else {

    alert(name + ' please write yes or no or y or n ');
}
//******************************************************************** */



/*var q5 = prompt('Are you older than me  :)')

q5 = q5.toLowerCase();


if (q5 == 'yes') {//YES,yEs,YEs,
    alert('give me  advice  ');
}
else if (q5 == 'y') {
    alert('give me  advice  ');
}

else if (q5 == 'no') {
    alert('I wount to tell you keep working on your dream ');
}
else if (q5 == 'n') {
    alert('I wount to tell you keep working on your dream ');
}
else {

    alert(name + ' please write yes or no or y or n ');
}
//******************************************************************** */



/*var q2 = prompt('Do you love me :p !!!)')

q2 = q2.toUpperCase();


if (q2 == 'YES') {//YES,yEs,YEs,
    alert('Thank you ... i love you too  ');
}
else if (q2 == 'Y') {
    alert('Thank you ... i love you too  ');
}

else if (q2 == 'NO') {
    alert(' I\'m funny try to love me hhhhh ');
}
else if (q2 == 'N') {
    alert(' I\'m funny try to love me hhhhh ');
}
else {
    alert(name + ' please write yes or no or y or n ');

    alert('Be always in love ');
}



/*

switch(love){
case'yes':
case 'y':
alert('of course')
break;
default:
    alert('what is up ???')
}





var fruits =['apple','banana','orange'];

fruits[0];


*/