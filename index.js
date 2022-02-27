// Import stylesheets
import './style.css';

// OBJECT DESTRUCTURING
// *************************************************

//Example 1
const address = {
  street: 'Fairfax',
  city: 'Los Angeles',
  state: 'California',
};

const { street, city, state: st } = address;
console.log(street, city, st);

//Example 2
const person = {
  name: 'Donovan',
  age: 33,
  salary: 5000,
};

const { name, age } = person;
console.log(`${name} is ${age} years old.`);

// SPREAD OPERATOR
// *************************************************

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

// CLASSES
// *************************************************

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} can walk.`);
  }
}

const person1 = new Person('Firoza');
console.log(person1.name);

console.log(person1.walk());

//INHERITTANCE
// *************************************************

class Student extends Person {
  //inheriting parent class Person into child class Student.
  constructor(name, grade) {
    super(name); // referencing parent class Person.
    this.grade = grade;
  }

  homework() {
    console.log(`${this.name} of grade ${this.grade} does homework!`);
  }
}

const student1 = new Student('Maria', 'ten');
console.log(student1.name); // inherited from parent class Person
console.log(student1.grade);
console.log(student1.homework());
console.log(student1.walk()); // inherited from parent class Person

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>
<h3>${street}</h3>
<p>${city}</p>
<small>${st}</small>
`;

// Destructuring assignment in JavaScript — Part 1
// *************************************************

// Before ES6
// --------------------------------------

const task = {
  id: 'TSK001',
  name: 'Tiling and Flooring',
  start_date: 1644451200000,
  end_date: 1644969599000,
  status: 'Completed',
  tags: ['Tower A', '1st Floor'],
};

const startDate = task.start_date;
const endDate = task.end_date;
const taskStatus = task.status;

console.log('Task start date: ' + startDate);

// After ES6
// --------------------------------------

// Destructuring assignment
// Destructuring assignment with some different variable name (name:taskName)
const { name: taskName, status, start_date, end_date } = task;

console.log(taskName + ' is ' + status);

// Array Destructuring
// --------------------------------------

const tags = ['Tower A', '1st Floor', 'Tiling', 'Flooring'];

//Destructuring assignment in arrays;
//Assign default values ( tag2="Ground Floor and tag5="Tiling and Flooring")
const [tag1, tag2 = 'Ground Floor', tag3, tag4, tag5 = 'Tiling and Flooring'] =
  tags;

console.log('I have ' + tag2 + ' and ' + tag4 + ' tasks.');
console.log('I have ' + tag5 + ' completed.');

// Assignment separate from declaration
// --------------------------------------

let listItems;

const todos = {
  task: 'Grocery',
  priority: 'high',
  listItems: ['carrot', 'pumpkin', 'noodles'],
};

// object Destructuring - separate from its declaration
({ listItems } = todos);

console.log(listItems); //["carrot", "pumpkin", "noodles"]

// Swapping Variables
// -----------------------------------------------------

let todo1 = 'Yoga Exercise';
let todo2 = 'Deposit amount in bank';

[todo1, todo2] = [todo2, todo1];

console.log(todo1, todo2);

// Ignore values
const todo3 = ['Dance class', 'Shopping for party', 'Gym', 'Send Email'];

const [fact1, , fact2] = todo3;

console.log('Fact1: ', fact1); // Dance class
console.log('Fact2: ', fact2); // logs "Gym" but not "shopping for party"

// REST OPERATOR
// *************************************************************

const listA = {
  material: 'pencil',
  price: '3',
  quality: 'high',
  needed: true,
};

const { material, price, ...restList } = listA;
console.log(material, price); // pencil 3
console.log(restList); // {quality: "high", needed: true}
console.log(restList.quality); // high

// Nested object and array destructuring
// ----------------------------------------
const song = {
  artists: {
    vocal: 'singerA',
    lyrics: 'lyricistA',
    musician: 'musicianA',
  },
  ranking: 4.5,
  album: 'album1',
  countries: ['usa', ['eng', 'aus'], 'can'],
};

const {
  artists: { vocal, lyrics, musician },
  countries,
} = song;

console.log(vocal); // singerA
console.log(musician); // musicianA
console.log(countries); // ["usa", "uk", "aus"]

// nested Destructuring in countries array;
const [country1, country2, country3] = countries;

console.log(country1); // usa
console.log(country2); // ["eng", "aus"]
console.log(country3); // can
