const users = [
  { name: 'lasha', age: 21 },
  { name: 'ana', age: 28 },
  { name: 'temo', age: 25 },
];

const youngestName = findYoungestUserName(users);
console.log(youngestName);  // დაბეჭდავს "Sarah"

function findYoungestUserName(users) {
  if (users.length === 0) {
    return null;
  }

  let youngestAge = Infinity;
  let youngestName = '';

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.hasOwnProperty('age') && typeof user.age === 'number' && user.age < youngestAge) {
      youngestAge = user.age;
      youngestName = user.name;
    }
  }

  return youngestName;
}
