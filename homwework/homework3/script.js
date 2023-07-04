function calculateWinner(age1, age2) {
  if (age1 % 3 === 0 && age2 % 3 !== 0) {
    return "The first player is the winner";
  } else if (age1 % 3 !== 0 && age2 % 3 === 0) {
    return "The second player is the winner";
  } else {
    return "Everyone got an equal number";
  }
}
// მაგალითის გამოძახება
var person1Age = parseInt(prompt("player1 number"));
var person2Age = parseInt(prompt("player2 number:"));

var result = calculateWinner(person1Age, person2Age);
console.log(result);