// Import stylesheets
import './style.css';

// OBJECT DESTRUCTURING

const address = {
  street: 'Fairfax',
  city: 'Los Angeles',
  state: 'California',
};

const { street, city, state: st } = address;

console.log(street, city, st);

// SPREAD OPERATOR

//ARRAYS
const first = [1, 2, 3];
const second = [4, 5, 6];

const concatenated = first.concat(second);
console.log(concatenated);

const combined = [...first, ...second];
console.log(combined);

const added = [...first, ...second, 7, 8, 9];
console.log(added);

const cloneA = [...first];
console.log(cloneA);

//OBJECT
const objectA = { name: 'John' };
const objectB = { job: 'Engineer' };

const objectAB = { ...objectA, ...objectB, location: 'Japan' };
console.log(objectAB);

//clone objectA
const objectCloned = { ...objectAB };
console.log(objectCloned);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>
<h3>${street}</h3>
<p>${city}</p>
<small>${st}</small>
`;
