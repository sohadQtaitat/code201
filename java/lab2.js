// 'use strict';


// function numberValidator(inputString){
//     var inputNumber = parseInt (inputString);
//     while (isNaN (inputNumber) ) {
//         response = prompt ('Please enter a number ...');
//    inputNumber = parseInt (response);
//     }
//     return inputNumber;
//  }

//  var number = numberValidator('foo');

//  console.log(number);


var name = prompt('What is your Name ,Please !');
console.log('name' + name);
alert('Welcome ' + name + ' how are you , i want to ask you some question please');
var point = 0;

///////////////////////////////////////////////////////////////////////////////////

function General(Question1, Question2, Question3, Question4, Question5,Question6,Question7) {
    for (let i = 0; i <= 4; i++) {
        Question1('Are you Happy ?', 'yes i wish always ', 'No so sad ');
        Question2('Are you in love ', 'Good For You', 'Try to be in love ');
        Question3('Do you Love healthy Food ', 'So Great for you', 'Try to be Healthy');
        Question4('do you love music ', 'Nice', 'Try to listen to music ');
        Question5('Do you love animals ', 'That is so Nice ', 'Keep Try');
        Question6('Who much 2+2 ? Please write your answer !?', 'Correct answer ... good job',' sorry your answer is too low  ...please try again :)',' sorry your answer is too high  ...please try again :)');
        Question7();
    }
}
General(Question1, Question2, Question3, Question4, Question5,Question6,Question7);
console.log(Question1, Question2, Question3, Question4, Question5,Question6,Question7);





//////////////////////////////////////////////////////////////

function Question1(inputString, positivereply, nigativereply) {

    var q1 = prompt(inputString)

    q1 = q1.toLowerCase();

    if (q1 == 'yes') {//YES,yEs,YEs,
        alert(positivereply);
        point = point + 1;
    }
    else if (q1 == 'y') {
        alert(positivereply);
        point = point + 1;

    }
    else if (q1 == 'no') {
        alert(nigativereply);
    }
    else if (q1 == 'n') {
        alert(nigativereply);
    }
    else {
        alert(name + ' please write yes or no or y or n ');


    }
}
Question1('Are you Happy ?', 'yes i wish always ', 'No so sad ');
console.log(Question1);



function Question2(inputString, positivereply, nigativereply) {
    var q2 = prompt(inputString);

    q2 = q2.toUpperCase();


    if (q2 == 'YES') {//YES,yEs,YEs,
        alert(positivereply);
        point = point + 1
    }
    else if (q2 == 'Y') {
        alert(positivereply);
        point = point + 1;

    }

    else if (q2 == 'NO') {
        alert(nigativereply);
    }
    else if (q2 == 'N') {
        alert(nigativereply);
    }
    else {
        alert(name + ' please write yes or no or y or n ');

    }
}
Question2('Are you in love ', 'Good For You', 'Try to be in love ');
console.log(Question2);


/* ***************************************************************** */

function Question3(inputString, Positivereply, nigativereply) {



    var q3 = prompt(inputString)

    q3 = q3.toLowerCase();


    if (q3 == 'yes') {//YES,yEs,YEs,
        alert(Positivereply);
        point = point + 1;

    }
    else if (q3 == 'y') {
        alert(Positivereply);
        point = point + 1;

    }

    else if (q3 == 'no') {
        alert(nigativereply);

    }
    else if (q3 == 'n') {
        alert(nigativereply);
    }
    else {
        alert(name + ' please write yes or no or y or n ');

    }
}
Question3('Do you Love healthy Food ', 'So Great for you', 'Try to be Healthy');
console.log(Question3);


//************************************************************* */

function Question4(inputString, positivereply, nigativereply) {


    var q4 = prompt(inputString)

    q4 = q4.toLowerCase();


    if (q4 == 'yes') {//YES,yEs,YEs,
        alert(positivereply);
        point = point + 1;

    }
    else if (q4 == 'y') {
        alert(positivereply);
        point = point + 1;

    }

    else if (q4 == 'no') {
        alert(nigativereply);
    }
    else if (q4 == 'n') {
        alert(nigativereply);
    }
    else {

        alert(name + ' please write yes or no or y or n ');
    }
}
Question4('do you love music ', 'Nice', 'Try to listen to music ');
console.log(Question4);

//******************************************************************** */


function Question5(inputString, positivereply, nigativereply) {


    var q5 = prompt(inputString)

    q5 = q5.toLowerCase();


    if (q5 == 'yes') {//YES,yEs,YEs,
        alert(positivereply);
        point = point + 1;

    }
    else if (q5 == 'y') {
        alert(positivereply);
        point = point + 1;

    }

    else if (q5 == 'no') {
        alert(nigativereply);
    }
    else if (q5 == 'n') {
        alert(nigativereply);
    }
    else {

        alert(name + ' please write yes or no or y or n ');
    }
}
Question5('Do you love animals ', 'That is so Nice ', 'Keep Try');
console.log(Question5);




//////1111111111111111111111111111111111111111111111111111111111111111111111111111///////////
function Question6(inputString,positivereply,nigativereply1,nigativereply2){
var fav1 = prompt(inputString);
var AQ1 = 4;


if (fav1 == AQ1) {
    alert(positivereply);
point = point+1;
}


else {

    for (var i = 1; i <= 4; i++) {


        if (fav1 < AQ1) {

            alert(nigativereply1)
        }

        else if (fav1 > AQ1) {
            alert()

        }

        else {
            alert(nigativereply2)
        }
    }

}
}
Question6('Who much 2+2 ? Please write your answer !?', 'Correct answer ... good job',' sorry your answer is too low  ...please try again :)',' sorry your answer is too high  ...please try again :)');
console.log(Question6);


//******************************************************************** */




function Question7(){
var fav7 = prompt('What are multiples of 2 which less than 16');

var answers = [4, 6, 8, 10, 12, 14];
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

alart(answers);}
Question7();
console.log(Question7);
























































// var q2 = prompt('Do you love me :p !!!)')

// q2 = q2.toUpperCase();


// if (q2 == 'YES') {//YES,yEs,YEs,
//     alert('Thank you ... i love you too  ');
//     point = point + 1
// }
// else if (q2 == 'Y') {
//     alert('Thank you ... i love you too  ');
//     point = point + 1;

// }

// else if (q2 == 'NO') {
//     alert(' I\'m funny try to love me hhhhh ');
// }
// else if (q2 == 'N') {
//     alert(' I\'m funny try to love me hhhhh ');
// }
// else {
//     alert(name + ' please write yes or no or y or n ');

//     alert('Be always in love ');
// }



















//////1111111111111111111111111111111111111111111111111111111111111111111111111111///////////

// var name = prompt('What is your Name ,Please !');
// console.log('name' + name);
// alert('Welcome ' + name + ' how are you , i want to ask you some question please');



// var point = 0;

// ///////////////////////////////////////////////////////////////////////////////////////////////


// var fav1 = prompt('Who much 2+2 ? Please write your answer !?');
// var AQ1 = 4;


// if (fav1 == AQ1) {
//     alert('Correct answer ... good job');
// point = point+1;
// }


// else {

//     for (var i = 1; i <= 4; i++) {


//         if (fav1 < AQ1) {

//             alert(' sorry your answer is too low  ...please try again :)')
//         }

//         else if (fav1 > AQ1) {
//             alert(' sorry your answer is too high  ...please try again :)')

//         }

//         else {
//             alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 4')
//         }
//     }
// }




// ////////////////////////////////////////////////////////////



// var fav2 = prompt('Who much 5+3 ? Please write your answer !?');
// var AQ2 = 8;


// if (fav2 == AQ2) {
//     alert('Correct answer ... good job');
//     point = point+1;

// }


// else {

//     for (var i = 1; i <= 4; i++) {


//         if (fav2 < AQ2) {

//             alert(' sorry your answer is too low  ...please try again :)')
//         }

//         else if (fav2 > AQ2) {
//             alert(' sorry your answer is too high  ...please try again :)')

//         }

//         else {
//             alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 8')
//         }
//     }
// }

// //////////////////////////////////////////////////////////


// var fav3 = prompt('Who much 9-2 ? Please write your answer !?');
// var AQ3 = 7;


// if (fav3 == AQ3) {
//     alert('Correct answer ... good job');
//     point = point+1;

// }


// else {

//     for (var i = 1; i <= 4; i++) {


//         if (fav3 < AQ3) {

//             alert(' sorry your answer is too low  ...please try again :)')
//         }

//         else if (fav3 > AQ3) {
//             alert(' sorry your answer is too high  ...please try again :)')

//         }

//         else {
//             alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 7')
//         }
//     }
// }

// /////////////////////////////////////////////////////////////////////


// var fav4 = prompt('Who much 2*4 ? Please write your answer !?');
// var AQ4 = 8;


// if (fav4 == AQ4) {
//     alert('Correct answer ... good job');
//     point = point+1;

// }


// else {

//     for (var i = 1; i <= 4; i++) {


//         if (fav4 < AQ4) {

//             alert(' sorry your answer is too low  ...please try again :)')
//         }

//         else if (fav4 > AQ4) {
//             alert(' sorry your answer is too high  ...please try again :)')

//         }

//         else {
//             alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 8')
//         }
//     }
// }


// /////////////////////////////////////////////////////////////////

// var fav5 = prompt('Who much 10/2 ? Please write your answer !?');
// var AQ5 = 5;


// if (fav5 == AQ5) {
//     alert('Correct answer ... good job');
//     point = point+1;

// }


// else {

//     for (var i = 1; i <= 4; i++) {


//         if (fav5 < AQ5) {

//             alert(' sorry your answer is too low  ...please try again :)')
//         }

//         else if (fav5 > AQ5) {
//             alert(' sorry your answer is too high  ...please try again :)')

//         }

//         else {
//             alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 5')
//         }
//     }
// }

// /////////////////////////////////////////////////////////////////

// var fav6 = prompt('Who much 2*2+3+3-1 ? Please write your answer !?');
// var AQ56 = 9;


// if (fav6 == AQ6) {
//     alert('Correct answer ... good job');
//     point = point+1;

// }


// else {

//     for (var i = 1; i <= 4; i++) {


//         if (fav6 < AQ6) {

//             alert(' sorry your answer is too low  ...please try again :)')
//         }

//         else if (fav6 > AQ6) {
//             alert(' sorry your answer is too high  ...please try again :)')

//         }

//         else {
//             alert('I\'m sorry ' + name + 'your attempts are over  , the corrsct amswer is 5')
//         }
//     }
// }


// /////////////////////////////////////////////////////////////////////////






// var fav7 = prompt('What are multiples of 2 which less than 16');

// var answers = [4, 6, 8, 10, 12, 14];
// var leftAttembet = fav7.length - 1;

// for (var i = 0; i < fav7.length; i++) {

//     if (fav7 == 4 || fav7 == 6 || fav7 == 8 || fav7 == 10 || fav7 == 12 || fav7 == 14) {


//             alert(' Keep going answer ')
//             point = point + 1;
//           fav7 =  prompt('correct answer ... you have ' + leftAttembet + ' attembet left ')

//     }
//     else {

//         alert('sorry ' + name + 'roung gussing .... you still have another attampet  ')
//       fav7=  prompt('What are multiples of 2 which less than 16')

//     }
// }

// alert('sorry ' + name + 'you have skipped your attempts to return ..... your point is ' + point)

// alart(answers);







// var q1 = prompt('Are you happy :)')

// q1 = q1.toLowerCase();

// if (q1 == 'yes') {//YES,yEs,YEs,
//     alert('I\'m Very happy to see you happy  ');
//     point = point+1;

// }
// else if (q1 == 'y') {
//     alert('I\'m Very happy to see you happy  ');
//     point = point+1;

// }

// else if (q1 == 'no') {
//     alert(' Ooh , try to make some thing you love to do  ');
// }
// else if (q1 == 'n') {
//     alert(' Ooh , try to make some thing you love to do  ');
// }
// else {
//     alert(name + ' please write yes or no or y or n ');

//     alert('Be happy' + name);
// }



// //***************************************************************** */

// var q3 = prompt('do you love to eat vegetarian food :)')

// q3 = q3.toLowerCase();


// if (q3 == 'yes') {//YES,yEs,YEs,
//     alert(' Great ......is very help for healthy ....  ');
//     point = point+1;

// }
// else if (q3 == 'y') {
//     alert(' Great ......is very help for healthy ....  ');
//     point = point+1;

// }

// else if (q3 == 'no') {
//     alert(' Try to be vegetarian is help your healthy  ');

// }
// else if (q3 == 'n') {
//     alert(' Try to be vegetarian is help your healthy  ');
// }
// else {
//     alert(name + ' please write yes or no or y or n ');

//     alert('food is delicius :)');
// }



// //************************************************************* */


// var q4 = prompt('Do you love to hear music:)')

// q4 = q4.toLowerCase();


// if (q4 == 'yes') {//YES,yEs,YEs,
//     alert('Good .... music make mind comfortbal  ');
//     point = point+1;

// }
// else if (q4 == 'y') {
//     alert('Good .... music make mind comfortbal  ');
//     point = point+1;

// }

// else if (q4 == 'no') {
//     alert(' there is beautifual music try to hear it  ');
// }
// else if (q4 == 'n') {
//     alert(' there is beautifual music try to hear it  ');
// }
// else {

//     alert(name + ' please write yes or no or y or n ');
// }
// //******************************************************************** */



// var q5 = prompt('Are you older than me  :)')

// q5 = q5.toLowerCase();


// if (q5 == 'yes') {//YES,yEs,YEs,
//     alert('give me  advice  ');
//     point = point+1;

// }
// else if (q5 == 'y') {
//     alert('give me  advice  ');
//     point = point+1;

// }

// else if (q5 == 'no') {
//     alert('I wount to tell you keep working on your dream ');
// }
// else if (q5 == 'n') {
//     alert('I wount to tell you keep working on your dream ');
// }
// else {

//     alert(name + ' please write yes or no or y or n ');
// }
// //******************************************************************** */



// var q2 = prompt('Do you love me :p !!!)')

// q2 = q2.toUpperCase();


// if (q2 == 'YES') {//YES,yEs,YEs,
//     alert('Thank you ... i love you too  ');
//     point=point+1
// }
// else if (q2 == 'Y') {
//     alert('Thank you ... i love you too  ');
//     point = point+1;

// }

// else if (q2 == 'NO') {
//     alert(' I\'m funny try to love me hhhhh ');
// }
// else if (q2 == 'N') {
//     alert(' I\'m funny try to love me hhhhh ');
// }
// else {
//     alert(name + ' please write yes or no or y or n ');

//     alert('Be always in love ');
// }





























// 

// switch(love){
// case'yes':
// case 'y':
// alert('of course')
// break;
// default:
//     alert('what is up ???')
// }





// var fruits =['apple','banana','orange'];

// fruits[0];


// 






