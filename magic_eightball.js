const userName = 'Sam'

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will I be the oldest person alive?'
console.log( `${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber){
    case 0:
        console.log('It is certain');
        break;
    case 1:
        console.log('It is decidedly');
        break;
    case 2:
        console.log('Reply hazy try again');
        break;
    case 3:
        console.log('Cannot predict now');
        break;
    case 4:
        console.log('Do not count on it');
        break;
    case 5:
        console.log('My sources say no');
        break;
    case 6:
        console.log('Outlook not so good');
        break;
    case 7:
        console.log('Signs point to yes');
        break;
    default:
        console.log('Something is broken');
        break;
}

console.log(eightBall)
