// start with strings, numbers and booleans

let age = 100
let age2 = age

console.log(age, age2);

age = 200
console.log(age, age2);
/////////////////////////////////////////////////////////////////////////////////////////////////////


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// ...and we want to make a copy of it.

const team = players

console.log(team, players);

// You might think we can just do something like this:

team[3] = 'Isaac'

// However what happens when we update that array? 
console.log(team, players);

/* Now here is the problem!
We have edited the original array too!
Why? It is because that is an array reference, not an array copy. They both point to the same array!
So, how do we fix this? We take a copy instead! */

// One way:

const team2 = players.slice();
team2[3] = 'Tadashi';

console.log(team2, players);

// or create a new array and concat the old one in

const team3 = [].concat(players);
team3[3] = 'Rhondie';

console.log(team3, players);

// or use the new ES6 Spread

const team4 = [...players]
team4[3] = 'Bobbie Fisher';
// now when we update it, the original one isn't changed
console.log(team4, players);

const team5 = Array.from(players);
team5[3] = 'Blue Falcon'

console.log(team5, players);
/////////////////////////////////////////////////////////////////////////////////////////////////////

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

console.log(person.number);

// and think we make a copy:

const captain = person
captain.number = 999

console.log(person);

// How do we take a copy instead?

const capt2 = Object.assign({ }, person, { number: 99});

console.log(capt2);

// We will hopefully soon see the object ...spread

const capt3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
